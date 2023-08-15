import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    SettingsComponent,
    EditTaskComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    SharedModule,
  ]
})
export class ViewsModule { }
