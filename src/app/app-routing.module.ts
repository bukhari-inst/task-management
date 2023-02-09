import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: 'addtask', component: TaskFormComponent },
  { path: 'task', component: TaskListComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'taskcategories', component: CategoryListComponent },
  { path: 'addtaskcategories', component: CategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
