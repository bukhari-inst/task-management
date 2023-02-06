import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: 'task', component: TaskFormComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
