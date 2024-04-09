import { provideStore } from '@ngrx/store';
import { TodoListReducer } from './reducers/todo';

const AppStore = provideStore({ todos: TodoListReducer });

export default AppStore;
