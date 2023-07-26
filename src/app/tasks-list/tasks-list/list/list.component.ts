import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks!: Task[];

  constructor(public ts: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.ts.getTasks();
  }

}
