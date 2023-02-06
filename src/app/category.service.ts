import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from './category';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private heroesUrl =
    'https://taskmanagementserver.000webhostapp.com/TaskCategories'; // URL to web api
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
  getTaskCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched Category')),
      catchError(this.handleError<Category[]>('getTaskCategories', []))
    );
  }
}
