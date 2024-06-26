import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, ListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export default class ContainerComponent {
  today = new Date().toUTCString().slice(0, 16);
}
