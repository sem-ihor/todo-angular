import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  storage: any = window.localStorage;

  readonly KEY: string = 'ITEMS';

  constructor() {
  }

  save(data: any) {
    const dataStr = JSON.stringify(data);
    this.storage.setItem(this.KEY, dataStr);
  }

  load() {
    const dataStr = this.storage.getItem(this.KEY);
    return dataStr ? JSON.parse(dataStr) : [];
  }
}
