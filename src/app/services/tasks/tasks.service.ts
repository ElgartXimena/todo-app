import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';
import { TasksList } from 'src/models/tasks-list.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksList!: TasksList;

  constructor(private storage: StorageService) { 
    let storedTasks = this.storage.getItem('tasks');
    if (storedTasks !== null){
      this.tasksList = new TasksList(JSON.parse(storedTasks));
    } else {
      this.tasksList = new TasksList([]);
    }
  }

  public getTasks(): Task[] {
    return this.tasksList.getTasksList();
  }

  public addTask(task: string): void {
    const newTask = new Task(task);
    this.tasksList.addTask(newTask);
    this.saveChanges();
  }

  public deleteTask(task: Task): void {
    this.tasksList.deleteTask(task);
    this.saveChanges();
  }

  private saveChanges(): void {
    this.storage.setItem('tasks', JSON.stringify(this.tasksList.getTasksList()));
  }
}
