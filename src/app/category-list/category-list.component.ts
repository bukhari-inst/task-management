import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [DatePipe],
})
export class CategoryListComponent implements OnInit {
  constructor(
    private CategoryService: CategoryService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  categories: Category[] = [];
  date = this.datePipe;

  deleteCategory(category: Category): void {}

  getCategory(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }
}
