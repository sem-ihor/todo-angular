import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../../../task.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {

  @Output('onAction') onAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  remove() {
    this.onAction.emit(true);
  }

  cancel() {
    this.onAction.emit(false);
  }
}
