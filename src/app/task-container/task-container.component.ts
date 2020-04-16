import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  items$: Observable<any>;
  targetAction: any = {
    action: '',
    id: null
  };
  searching: string = '';


  constructor(private taskSvc: TaskService) {
  }

  ngOnInit(): void {
    this.items$ = this.taskSvc.todos;
  }

  changeAction($event: any) {
    this.targetAction.action = $event.action;
    this.targetAction.id = $event.id;
  }

  remove($event: boolean) {
    if ($event) {
      this.taskSvc.remove(this.targetAction.id);
    }
    this.targetAction.action = '';
  }

  edit($event: any) {
    if ($event.action) {
      this.taskSvc.edit(this.targetAction.id, $event.content);
      this.targetAction.action = '';
    }
    this.targetAction.action = '';
  }

  search($event) {
    this.searching = $event;
  }
}
