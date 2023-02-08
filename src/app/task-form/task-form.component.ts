import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Category } from '../category';
import { Task } from '../task';
import { CategoryService } from '../category.service';
import { TaskService } from '../task.service';

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
    category_id: '',
    title: '',
    description: '',
    startdate: '',
    finishdate: '',
    status: '',
  };

  constructor(
    private http: HttpClient,
    private location: Location,
    private CategoryService: CategoryService,
    private TaskService: TaskService
  ) {}

  categories: Category[] = [];
  task: Task[] = [];

  ngOnInit(): void {
    this.getTaskCategories();
  }

  goBack(): void {
    this.location.back();
  }

  getTaskCategories(): void {
    this.CategoryService.getTaskCategories().subscribe(
      (categories) => (this.categories = categories)
    );
  }

  add(data: any): void {
    this.TaskService.addTask(data).subscribe((data) => {
      this.task.push(data);
      this.goBack();
    });
  }

  onSubmit(data: any) {
    this.http
      .post<any>(this.url, data, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    console.log(data);
  }
}
