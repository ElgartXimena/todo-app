import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { ClipboardService } from 'src/app/services/clipboard/clipboard.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  copy_btn = "../../../../assets/icons/clipboard.svg";
  share_btn = "../../../../assets/icons/share-nodes.svg";
  delete_btn = "../../../../assets/icons/trash-can.svg";

  @Input() task!: Task;

  constructor(
    public ts: TasksService, 
    public cbs: ClipboardService, 
    public ss: ShareService
  ) {}
  
  toggleTask() {
    this.task.done = !this.task.done;
  }

  copyTask() {
    this.cbs.copyTask(this.task.name);
  }

  shareTask() {
    this.ss.shareTask(this.task);
  }

  deleteTask() {
    this.ts.deleteTask(this.task);
  }
}
