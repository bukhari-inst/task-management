import { Component } from '@angular/core';
import { TaskCategory } from '../task-category';
import { TaskCategoryService } from '../task-category.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  hero: TaskCategory = {
    id: 1,
    name: 'Windstorm',
  };

  constructor(private TaskCategoryService: TaskCategoryService) {}

  categories: TaskCategory[] = [];

  ngOnInit(): void {
    this.getTaskCategories();
  }

  getTaskCategories(): void {
    this.TaskCategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }
}
