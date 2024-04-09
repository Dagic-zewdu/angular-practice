import { createReducer, on } from '@ngrx/store';
import { todoListType, todoStoreState } from '../../models/todolist';
import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from '../actions/todolist';

const initialState: todoStoreState = {
  loading: true,
  todos: [
    {
      id: 1,
      name: 'Test',
      starting_time: '2021-09-24T13:00:00.000Z',
      notify_before: '2021-09-24T13:00:00.000Z',
      completed: false,
    },
  ],
  error: false,
};

export const TodoListReducer = createReducer(
  initialState,
  on(getTodo, (state) => {
    let todos = localStorage.getItem('todos');
    if (!todos) {
      return {
        ...state,
        loading: false,
        todos: [
          {
            id: 1,
            name: 'Test',
            starting_time: '2021-09-24T13:00:00.000Z',
            notify_before: '2021-09-24T13:00:00.000Z',
            completed: false,
          },
        ],
      };
    }
    return {
      ...state,
      loading: false,
      todos: JSON.parse(todos),
    };
  }),
  on(addTodo, (state, { todo }) => {
    let todos = localStorage.getItem('todos');
    if (!todos) {
      localStorage.setItem('todos', JSON.stringify([todo]));
      return { ...state, loading: false, todos: [todo] };
    }
    let updatedTodos = JSON.parse(todos);
    updatedTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, loading: false, todos: updatedTodos };
  }),
  on(updateTodo, (state, { todo }) => {
    let todos = localStorage.getItem('todos');
    if (!todos) {
      return { ...state, loading: false, todos: [] };
    }
    let updatedTodos = JSON.parse(todos);
    let index = updatedTodos.findIndex((t: todoListType) => t.id === todo.id);
    updatedTodos[index] = todo;
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, loading: false, todos: updatedTodos };
  }),
  on(deleteTodo, (state, { id }) => {
    let todos = localStorage.getItem('todos');
    if (!todos) {
      return { ...state, loading: false, todos: [] };
    }
    let updatedTodos = JSON.parse(todos);
    let index = updatedTodos.findIndex((t: todoListType) => t.id === id);
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, loading: false, todos: updatedTodos };
  }),
  on(completeTodo, (state, { id }) => {
    let todos = localStorage.getItem('todos');
    if (!todos) {
      return { ...state, loading: false, todos: [] };
    }
    let updatedTodos = JSON.parse(todos);
    let index = updatedTodos.findIndex((t: todoListType) => t.id === id);
    updatedTodos[index].completed = true;
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, loading: false, todos: updatedTodos };
  })
);
