import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  add_btn = "../../../../assets/icons/check.svg";

  @Output() addTaskEvent = new EventEmitter<string>();

  emitNewTask(newTask: string) {
    this.addTaskEvent.emit(newTask)
    return false;
  }
}
