export interface todoListType {
  id: string | number;
  name: string;
  starting_time: string;
  notify_before: string | number;
  completed: boolean;
}

export interface todoStoreState {
  loading: boolean;
  todos: todoListType[];
  error: string | boolean;
}
