import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setItem(key: string, value: string): void {
    return window.localStorage.setItem(key, value);
  }

  public getItem(key: string): any {
    return window.localStorage.getItem(key);
  }
}
