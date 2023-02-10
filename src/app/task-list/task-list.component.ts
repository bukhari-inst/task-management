import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [DatePipe],
})
export class TaskListComponent implements OnInit {
  constructor(private TaskService: TaskService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getTask();
  }

  tasks: Task[] = [];
  date = this.datePipe;

  deleteTask(tasks: Task): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks = this.tasks.filter((h) => h !== tasks);
      this.TaskService.deleteTask(tasks.id).subscribe();
      alert('Task deleted sucessfully');
    }
  }

  getTask(): void {
    this.TaskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }
}
