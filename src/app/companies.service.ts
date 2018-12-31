import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companies } from './companies';
import { Observable } from '../../node_modules/rxjs';
import { HttpHeaders } from '@angular/common/http';

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

  /** POST: add a new company to the server */
addComp (company: Companies): Observable<Companies> {
  return this.http.post<Companies>(this._url, company, httpOptions);
  
}

 /** DELETE: delete the company from the server */
 deleteComp(company: Companies | number): Observable<Companies> {
  const id = typeof company === 'number' ? company : company.id;
  const url = `${this._url}/${id}`;

  return this.http.delete<Companies>(url, httpOptions);
}

/** PUT: update the company on the server */
updateInfo (info: Companies): Observable<any> {
  return this.http.put(this._url, info, httpOptions);
}
}
