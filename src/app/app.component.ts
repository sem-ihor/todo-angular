import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private  taskSvc: TaskService) {
  }

  ngOnInit(): void {
    this.taskSvc.todos.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }


}
