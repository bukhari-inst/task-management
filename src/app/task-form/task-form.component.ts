import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  constructor(private CategoryService: CategoryService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.getTaskCategories();
  }

  getTaskCategories(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }
}
