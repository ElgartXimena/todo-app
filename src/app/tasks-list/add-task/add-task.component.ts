import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  add_btn = "../../../../assets/icons/check.svg";

  constructor(public ts: TasksService) {}

  addTask($event: Event, newTask: HTMLInputElement) {
    $event.preventDefault();
    if (newTask.value !== '') {
      this.ts.addTask(newTask.value);
      newTask.value = '';
    }
  }
}
