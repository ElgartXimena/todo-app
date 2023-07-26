import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  public copyTask(task: string): void {
    navigator.clipboard.writeText(task);
  }
}
