import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskService} from '../../../task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output('onAction') onAction: EventEmitter<any> = new EventEmitter<any>();
  text: string = '';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.onAction.emit({
      action: true,
      content: this.text
    });
    this.text = '';
  }

  cancel() {
    this.onAction.emit({
      action: false,
      content: ''
    });
    this.text = '';
  }
}
