import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CategoryService } from '../category.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [DatePipe],
})
export class TaskListComponent implements OnInit {
  constructor(
    private CategoryService: CategoryService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  tasks: Task[] = [];
  date = this.datePipe;

  getTask(): void {
    this.CategoryService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }
}
