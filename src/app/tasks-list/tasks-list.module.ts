import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent,
    TasksComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    TasksListComponent
  ]
})
export class TasksListModule { }
