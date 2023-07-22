import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  copy_btn = "../../../../assets/icons/clipboard.svg";
  share_btn = "../../../../assets/icons/share-nodes.svg";
  delete_btn = "../../../../assets/icons/trash-can.svg";

  @Input() task: string = '';
  @Output() deleteTask = new EventEmitter<string>();

  emitDeleteTask() {
    this.deleteTask.emit(this.task);
  }
}
