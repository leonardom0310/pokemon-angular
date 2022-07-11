import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      const storageItem = this.storage.getItem(key);
      return storageItem ? JSON.parse(storageItem) : null;
    }
    return null;
  }

  remove(key: string): void {
    if (this.storage) {
      this.storage.removeItem(key);
    }
  }
}
