import './styles.css'
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

const tarea = new Todo('Atender javaxx');
const tare2 = new Todo('Atender java');
export const todoList = new TodoList();
todoList.todos.forEach(element => {
    crearTodoHtml(element);
});