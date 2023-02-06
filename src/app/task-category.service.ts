import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { TaskCategory } from './task-category';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class TaskCategoryService {
  private heroesUrl = 'http://localhost:8080/TaskCategories'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
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

  /** GET heroes from the server */
  getTaskCategories(): Observable<TaskCategory[]> {
    return this.http.get<TaskCategory[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched TaskCategory')),
      catchError(this.handleError<TaskCategory[]>('getTaskCategories', []))
    );
  }
}
