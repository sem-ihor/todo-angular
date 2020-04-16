import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TaskAddComponent} from './task-add/task-add.component';
import {TaskContainerComponent} from './task-container/task-container.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {FormsModule} from '@angular/forms';
import {TaskService} from './task.service';
import {EditComponent} from './task-item/action/edit/edit.component';
import {RemoveComponent} from './task-item/action/remove/remove.component';
import {FilterPipe} from './pipes/filter.pipe';
import {ActionComponent} from './task-container/action/action.component';
import {ModelService} from './model.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskContainerComponent,
    TaskItemComponent,
    EditComponent,
    RemoveComponent,
    FilterPipe,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService, ModelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
