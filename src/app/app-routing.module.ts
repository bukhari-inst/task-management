import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskCategoriesFormComponent } from './task-categories-form/task-categories-form.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: 'taskcategories', component: TaskCategoriesFormComponent },
  { path: 'task', component: TaskFormComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
