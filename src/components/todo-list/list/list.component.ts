import { Component } from '@angular/core';
import { todoListType } from '../../../models/todolist';
import { Store } from '@ngrx/store';
import { StoreType } from '../../../models/store';
import { getTodo } from '../../../store/actions/todolist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  loading$ = false;
  todos$: todoListType[] = [];
  editText: string = '';
  edit: { id: string | number; edit: boolean }[] = [];
  constructor(private store: Store<StoreType>) {
    store.dispatch(getTodo());
    store.select('todos').subscribe((state) => {
      this.todos$ = state.todos;
      this.loading$ = state.loading;
      this.edit = this.todos$.map((todo) => ({ id: todo.id, edit: false }));
    });
  }
  async ngOnInit(): Promise<void> {
    let input = await document.getElementById('add-task-name-input');
    if (input) {
      input.focus();
    }
  }
  editToDo = async (id: string | number, value: boolean) => {
    this.edit = await this.edit.map((todo) => {
      if (todo.id === id) {
        return { ...todo, edit: value };
      }
      return todo;
    });
    if (value) {
      let input = await document.getElementById('edit-task-name-input-' + id);
      if (input) {
        input.hidden = false;
        input.focus();
      }
    }
  };
  checkToDoForEdit = (id: string | number) => {
    return this.edit.find((todo) => todo.id === id)?.edit;
  };
  setEditText = (text: string) => {
    this.editText = text;
  };
}
