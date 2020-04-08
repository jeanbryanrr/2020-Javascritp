import { Todo } from '../classes/';
import { todoList } from '../index'
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchor = document.querySelectorAll('.filtro');
export const crearTodoHtml = (todo) => {
    const html = `
      <li class="${todo.completado?'completed':''} " data-id="${todo.id}">
     <div class="view">
         <input class="toggle" type="checkbox" ${todo.completado?'checked':''}>
         <label> ${todo.tarea} </label>
         <button class="destroy"></button>
     </div>
     <input class="edit" value="Create a TodoMVC template">
     </li>`;

    const div = document.createElement('div');
    div.innerHTML = html;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};


txtInput.addEventListener('keyup', (evento) => {

    if (evento.keyCode === 13 && evento.target.value.length > 0) {

        const todo = new Todo(txtInput.value);

        todoList.nuevoTodo(todo);
        console.log(todoList);

        crearTodoHtml(todo);
        txtInput.value = '';
    }


});


divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

});
btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i > 0; i--) {
        const elemnto = divTodoList.children[i];
        if (elemnto.classList.contains('completed')) {
            divTodoList.removeChild(elemnto);
        }
    }
});


ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if (!filtro) return;
    anchor.forEach(element => {
        element.classList.remove('selected');
    });

    event.target.classList.add('selected');
    for (const iterator of divTodoList.children) {
        iterator.classList.remove('hidden');
        const completado = iterator.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    iterator.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    iterator.classList.add('hidden');
                }
                break;
            default:
                break;
        }
    }
});