import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDuePipe } from './pipes/task-due.pipe';
import { TaskLatePipe } from './pipes/task-late.pipe';
import { TaskDonePipe } from './pipes/task-done.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    AddTaskComponent,
    TaskTableComponent,
    TaskDuePipe,
    TaskLatePipe,
    TaskDonePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
