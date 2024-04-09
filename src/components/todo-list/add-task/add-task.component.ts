import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreType } from '../../../models/store';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaterialTimepickerModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  applyForm = new FormGroup({
    name: new FormControl(''),
  });
  hour: number = new Date().getHours();
  minute: number = new Date().getMinutes();
  constructor(private store: Store<StoreType>) {}
  addTask() {
    let name = this.applyForm.value.name;
    //  this.store.dispatch(addTodo())
  }
}
