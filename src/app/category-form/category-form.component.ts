import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  constructor(
    private location: Location,
    private CategoryService: CategoryService
  ) {}

  formData = {
    name: '',
  };

  tasksForm = new FormGroup({
    name: new FormControl('Landing Page', [Validators.required]),
  });

  ngOnInit(): void {}

  category: Category[] = [];

  // submit(data: any): void {
  //   this.CategoryService.addTask(data).subscribe((data) => {
  //     this.category.push(data);
  //     this.goBack();
  //   });
  // }

  add(data: any): void {
    this.CategoryService.addTask(data).subscribe((data) => {
      this.category.push(data);
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }

  getCategory(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (category) => (this.category = category)
    );
  }
}
