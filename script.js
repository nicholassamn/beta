class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.render();
    }

    cacheElements() {
        this.todoInput = document.getElementById('todoInput');
        this.deadlineInput = document.getElementById('deadlineInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.totalCount = document.getElementById('totalCount');
        this.completedCount = document.getElementById('completedCount');
        this.clearCompleted = document.getElementById('clearCompleted');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    bindEvents() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        this.clearCompleted.addEventListener('click', () => this.deleteManyCompleted());

        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        this.todoList.addEventListener('change', (e) => {
            if (e.target.classList.contains('checkbox')) {
                const id = parseInt(e.target.dataset.id);
                this.toggleTodo(id);
            }
        });

        this.todoList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const id = parseInt(e.target.dataset.id);
                this.deleteTodo(id);
            }
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        const deadline = this.deadlineInput.value;
        
        if (!text) {
            alert('Masukkan tugas terlebih dahulu!');
            return;
        }

        if (text.length > 200) {
            alert('Tugas terlalu panjang! Maksimal 200 karakter.');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            deadline: deadline || null,
            createdAt: new Date().toLocaleDateString('id-ID')
        };

        this.todos.unshift(todo);
        this.save();
        this.render();
        this.todoInput.value = '';
        this.deadlineInput.value = '';
        this.todoInput.focus();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
        }
    }

    deleteTodo(id) {
        if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.save();
            this.render();
        }
    }

    deleteManyCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            alert('Tidak ada tugas yang sudah selesai!');
            return;
        }

        if (confirm(`Hapus ${completedCount} tugas yang sudah selesai?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.save();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        this.render();
    }

    getFilteredTodos() {
        if (this.currentFilter === 'active') {
            return this.todos.filter(t => !t.completed);
        } else if (this.currentFilter === 'completed') {
            return this.todos.filter(t => t.completed);
        }
        return this.todos;
    }

    updateStats() {
        const totalTodos = this.todos.length;
        const completedTodos = this.todos.filter(t => t.completed).length;

        this.totalCount.textContent = totalTodos;
        this.completedCount.textContent = completedTodos;
    }

    getDeadlineStatus(deadline) {
        if (!deadline) return null;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const deadlineDate = new Date(deadline);
        deadlineDate.setHours(0, 0, 0, 0);
        
        const diffTime = deadlineDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
            return { status: 'urgent', message: '⚠️ Deadline lewat ' + Math.abs(diffDays) + ' hari lalu', days: diffDays };
        } else if (diffDays === 0) {
            return { status: 'urgent', message: '🔴 Deadline hari ini!', days: 0 };
        } else if (diffDays <= 3) {
            return { status: 'warning', message: '🟠 ' + diffDays + ' hari tersisa', days: diffDays };
        } else {
            return { status: 'safe', message: '🟢 ' + diffDays + ' hari tersisa', days: diffDays };
        }
    }

    render() {
        const filtered = this.getFilteredTodos();
        this.todoList.innerHTML = '';

        if (filtered.length === 0) {
            this.emptyState.classList.add('show');
        } else {
            this.emptyState.classList.remove('show');
            
            filtered.forEach(todo => {
                const li = document.createElement('li');
                if (todo.completed) {
                    li.classList.add('completed');
                }

                const deadlineStatus = this.getDeadlineStatus(todo.deadline);
                if (deadlineStatus && !todo.completed) {
                    li.classList.add(`deadline-${deadlineStatus.status}`);
                }

                let deadlineHtml = '';
                if (todo.deadline) {
                    const deadlineClass = deadlineStatus ? deadlineStatus.status : '';
                    deadlineHtml = `<div class="deadline-info ${deadlineClass}">${deadlineStatus.message}</div>`;
                }

                li.innerHTML = `
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <input 
                                type="checkbox" 
                                class="checkbox" 
                                data-id="${todo.id}"
                                ${todo.completed ? 'checked' : ''}
                            >
                            <span class="todo-text" title="${todo.text}">${this.escapeHtml(todo.text)}</span>
                        </div>
                        ${deadlineHtml}
                    </div>
                    <button class="delete-btn" data-id="${todo.id}">Hapus</button>
                `;

                this.todoList.appendChild(li);
            });
        }

        this.updateStats();
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Inisialisasi aplikasi ketika DOM siap
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
