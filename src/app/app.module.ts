import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskCategoriesFormComponent } from './task-categories-form/task-categories-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskCategoriesFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
