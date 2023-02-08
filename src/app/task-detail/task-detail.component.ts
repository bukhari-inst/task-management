import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location,
    private CategoryService: CategoryService
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.getTask();
    this.getTaskCategories();
  }

  getTask(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.taskService.getTaskDetail(id).subscribe((task) => (this.task = task));
  }

  getTaskCategories(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }

  goBack(): void {
    this.location.back();
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(() => this.goBack());
    }
  }
}
