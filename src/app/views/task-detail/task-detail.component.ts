import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  task!: Task;

  constructor(public ts: TasksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let taskId = this.route.snapshot.paramMap.get('task-id');
    if (taskId) {
      this.task = this.ts.getTask(Number(taskId));
    }
  }
}
