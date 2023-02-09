import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryUrl = 'http://127.0.0.1:8000/api/TaskCategories'; // URL to web api
  // private taskCategoryUrl = 'http://localhost:3000/taskcategories';

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

  /** PUT: update the category on the server */
  updateTask(category: Category): Observable<any> {
    const url = `${this.categoryUrl}/${category.id}`;
    return this.http.put(url, category, this.httpOptions).pipe(
      tap((_) => this.log(`updated category id=${category.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteTask(id: number): Observable<Category> {
    const url = `${this.categoryUrl}/${id}`;

    return this.http.delete<Category>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted Task id=${id}`)),
      catchError(this.handleError<Category>('deleteHero'))
    );
  }

  /** GET Task detail by id */
  getCategoryDetail(id: number): Observable<Category> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap((_) => this.log(`fetched Category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  /** POST: add a category task to the server */
  addTask(task: Category): Observable<Category> {
    return this.http
      .post<Category>(this.categoryUrl, task, this.httpOptions)
      .pipe(
        tap((newCategory: Category) =>
          this.log(`added Category id=${newCategory.id}`)
        ),
        catchError(this.handleError<Category>('addTask'))
      );
  }

  /** GET task category from the server */
  getTaskCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl).pipe(
      tap((_) => this.log('fetched Task Category')),
      catchError(this.handleError<Category[]>('getTaskCategories', []))
    );
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
}
