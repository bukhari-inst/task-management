import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = 'http://localhost:3000/tasks'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET task from the server */
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl).pipe(
      tap((_) => this.log('fetched Task')),
      catchError(this.handleError<Task[]>('getTask', []))
    );
  }

  /** POST: add a new task to the server */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task, this.httpOptions).pipe(
      tap((newTask: Task) => this.log(`added task id=${newTask.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }
}
