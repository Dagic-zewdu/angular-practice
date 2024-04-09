import { createAction, props } from '@ngrx/store';
import { todoListType } from '../../models/todolist';

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ todo: todoListType }>()
);

export const getTodo = createAction('[Todo List] Get Todo');

export const updateTodo = createAction(
  '[Todo List] Update Todo',
  props<{ todo: todoListType }>()
);

export const deleteTodo = createAction(
  '[Todo List] Delete Todo',
  props<{ id: string }>()
);

export const completeTodo = createAction(
  '[Todo List] Complete Todo',
  props<{ id: string }>()
);
