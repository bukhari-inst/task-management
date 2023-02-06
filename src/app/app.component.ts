import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // public getTaskCategory: any;

  // constructor(private http: HttpClient) {}

  // categories: Category[] = [];

  // ngOnInit(): void {
  //   this.getTaskCategoryValue();
  // }

  // public getTaskCategoryValue() {
  //   this.http
  //     .get('https://taskmanagementserver.000webhostapp.com/TaskCategories')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

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

  title = 'my-app';
}
