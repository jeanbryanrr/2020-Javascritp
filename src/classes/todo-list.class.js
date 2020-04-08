export class TodoList {
    constructor() {
        this.cargarLoacalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }
    eliminarTodo(id) {
        this.todos = this.todos.filter((todo) => { return todo.id != id })
        this.guardarLocalStorage();
    }
    marcarCompletado(id) {

        for (const iterator of this.todos) {
            if (iterator.id == id) {
                iterator.completado = !iterator.completado;
                break;
            }
        }
        this.guardarLocalStorage();

    }

    eliminarCompletados() {
        this.todos = this.todos.filter((item) => { return !item.completado });
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLoacalStorage() {
        if (localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'));
        } else {
            this.todos = [];
        }
    }
}