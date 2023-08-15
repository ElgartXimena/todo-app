import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TasksListModule } from './tasks-list/tasks-list.module';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { TaskDetailComponent } from './views/task-detail/task-detail.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { SettingsComponent } from './views/settings/settings.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { loginGuard } from './guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [loginGuard],
    children: [
      { 
        path: '', 
        component: TasksComponent 
      },
      { 
        path: 'tasks/:task-id', 
        component: TaskDetailComponent 
      },
      { 
        path: 'tasks/:task-id/edit', 
        component: EditTaskComponent 
      },
      { 
        path: 'settings', 
        component: SettingsComponent 
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TasksComponent,
    TaskDetailComponent,
    EditTaskComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    TasksListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
