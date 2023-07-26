import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  public shareTask(task: Task): void {
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    }

    navigator.share({
      title: "Task shared from ToDo App",
      text: "Task: " + task.name + "\n" + "Done? " + task.done,
      url: window.location.href
    });
  }
}
