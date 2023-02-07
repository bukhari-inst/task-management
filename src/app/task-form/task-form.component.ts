import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  private url = 'http://localhost:3000/tasks'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  formData = {
    category: '',
    title: '',
    description: '',
    startdate: '',
    finishdate: '',
    status: '',
  };

  constructor(
    private CategoryService: CategoryService,
    private http: HttpClient
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.getTaskCategories();
  }

  getTaskCategories(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }

  onSubmit(data: any) {
    this.http
      .post<any>(this.url, data, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    console.log(data);
  }

  add(data: any): void {
    this.CategoryService.addTask(data).subscribe((data) => {
      this.categories.push(data);
    });
  }
}
