import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Output('onSearch') onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(public taskSvc: TaskService) {
  }

  ngOnInit(): void {
  }

  set search(value) {
    this.onSearch.emit(value);
  }


}
