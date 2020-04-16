import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModelService} from './model.service';

export interface TodoItem {
  id: number;
  date: Date;
  content: string;
  isDone: boolean;
  important: number;
}


@Injectable()
export class TaskService {

  private items: TodoItem[] = [];

  private subj$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private model: ModelService) {
    this.load();
  }

  get todos() {
    return this.subj$.asObservable();
  }

  add(task: string) {
    this.items.unshift(this.createTodo(task));
    this.subj$.next(this.items);
    this.save();
  }

  createTodo(text: string): TodoItem {
    return {
      id: Date.now(),
      date: new Date(),
      content: text,
      isDone: false,
      important: 1
    };
  }

  remove(index: number) {
    this.items.splice(index, 1);
    this.subj$.next(this.items);
    this.save();
  }

  edit(index: number, text: string) {
    this.items[index].content = text;
    this.subj$.next(this.items);
    this.save();
  }

  sortTodolist(sortText: string) {
    switch (sortText) {
      case 'done':
        this.items.sort((prev, next) => Number(next.isDone) - Number(prev.isDone));
        break;
      case 'importance':
        this.items.sort((prev, next) => next.important - prev.important);
        break;
      case 'date':
        this.items.sort((prev, next) => Number(new Date(next.date)) - Number(new Date(prev.date)));
        break;
      default:
        break;
    }
  }


  load() {
    this.items = this.model.load();
    this.subj$.next(this.items);
  }

  save() {
    this.model.save(this.items);
  }

  done() {
    this.save();
  }
}
