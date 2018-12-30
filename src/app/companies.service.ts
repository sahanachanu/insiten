import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companies } from './companies';
import { Observable } from '../../node_modules/rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _url = "api/companies";
  constructor(private http: HttpClient) { }

  getCompany():Observable<Companies[]>{
    return this.http.get<Companies[]>(this._url);
  }

  /** POST: add a new hero to the server */
addComp (company: Companies): Observable<Companies> {
  return this.http.post<Companies>(this._url, company, httpOptions);
  
}

 /** DELETE: delete the hero from the server */
 deleteComp(company: Companies | number): Observable<Companies> {
  const id = typeof company === 'number' ? company : company.id;
  const url = `${this._url}/${id}`;

  return this.http.delete<Companies>(url, httpOptions);
}
}
