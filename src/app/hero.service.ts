import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cat } from './hero';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable()
export class CatService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl = 'api/heroes'; // URL to web api

  private lambdaCats = 'https://ast9z666ll.execute-api.us-east-2.amazonaws.com/dev/cats'

  getCats (): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.lambdaCats)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getCats', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getCat(id: number): Observable<Cat> {
    const url = `${this.lambdaCats}/${id}`
    return this.http.get<Cat>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    )
  }

  getLivesSaved(id: number): Observable<number> {
    const url = `${this.lambdaCats}/${id}/livesleft`
    return this.http.get<number>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<number>(`getCat id=${id}`))
    )
  }

  //** PUT: update the hero on the server */
  updateCat (hero: Cat): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateCat'))
    )
  }

  /** POST: add a new hero to the server */
  addCat (hero: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Cat) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Cat>('addCat'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCat (hero: Cat | number): Observable<Cat>{
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<Cat>(url, httpOptions).pipe(
      tap(_=> this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Cat>('deleteCat'))
    );
  }

  /* GET heroes whose name contains search term */
  searchCats(term: string): Observable<Cat[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Cat[]>(`api/heroes/?name=${term}`).pipe(
      tap(_=> this.log(`found heroes matching "${term}`)),
      catchError(this.handleError<Cat[]>('seachCats', []))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CatService message with the MessageService */
  private log(message: string) {
    this.messageService.add('CatService: ' + message);
  }
}