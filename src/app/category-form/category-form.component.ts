import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {}

  category: Category[] = [];

  getCategory(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (category) => (this.category = category)
    );
  }
}
