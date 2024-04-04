import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, AddTaskComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export default class ContainerComponent {}
