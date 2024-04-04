import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  name: string = '';
  hour: number = new Date().getHours();
  minute: number = new Date().getMinutes();
}
