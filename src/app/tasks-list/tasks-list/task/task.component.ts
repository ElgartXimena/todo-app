import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  delete_btn = '../../../assets/delete-icon.png';

  @Input() task: string = '';
  @Output() deleteTask = new EventEmitter<string>();

  emitDeleteTask() {
    this.deleteTask.emit(this.task);
  }
}
