import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../task.service';

export interface Action {
  action: string;
  id: number;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input('index') index: number;
  @Input('task') task: any;
  @Output('onAction') onAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(private taskSvc: TaskService) {
  }

  ngOnInit(): void {
  }

  remove(index: number) {
    this.onAction.emit({
      action: 'remove',
      id: index
    });
  }

  check() {
    this.task.isDone = !this.task.isDone;
    this.taskSvc.done();
  }

  edit(index: number) {
    this.onAction.emit({
      action: 'edit',
      id: index
    });
  }

  decrement() {
    if (this.task.important > 1) {
      this.task.important--;
    } else {
      this.task.important = 5;
    }
    console.log(this.task.date);
  }


  increment() {
    if (this.task.important < 5) {
      this.task.important++;
    } else {
      this.task.important = 1;
    }
  }
}
