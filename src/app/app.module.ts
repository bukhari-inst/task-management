import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, TaskFormComponent, TaskListComponent, NavbarComponent, TaskDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
