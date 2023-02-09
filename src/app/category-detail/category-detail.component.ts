import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  categories: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private CategoryService: CategoryService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.CategoryService.getCategoryDetail(id).subscribe(
      (categories) => (this.categories = categories)
    );
  }

  updateTask(): void {
    if (this.categories) {
      this.CategoryService.updateTask(this.categories).subscribe(() =>
        this.goBack()
      );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
