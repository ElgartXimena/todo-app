import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './tasks-list/task/task.component';
import { ListComponent } from './tasks-list/list/list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent,
    ListComponent,
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
