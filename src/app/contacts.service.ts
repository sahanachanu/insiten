import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contacts } from './contacts';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ContactsService {

  private _urlc = 'api/contacts';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //  getContacts():Observable<Contacts[]>{
    //  return this.http.get<Contacts[]>(this._url);
    //}
  
    getContacts (): Observable<Contacts[]> {
      return this.http.get<Contacts[]>(this._urlc)
        .pipe(
          tap(_ => this.log('fetched contacts')),
          catchError(this.handleError('getContacts', []))
        );
    }
  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addContact (contact: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this._urlc, contact, httpOptions).pipe(
      tap((contact: Contacts) => this.log(`added contact w/ id=${contact.id}`)),
      catchError(this.handleError<Contacts>('addContact'))
    );
  }

  /** DELETE: delete the hero from the server */
deleteContact (contact: Contacts | number): Observable<Contacts> {
  const id = typeof contact === 'number' ? contact : contact.id;
  const url = `${this._urlc}/${id}`;

  return this.http.delete<Contacts>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted contact id=${id}`)),
    catchError(this.handleError<Contacts>('deleteContact'))
  );
}

  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ContactsService: ${message}`);
  }
}