import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// build header
const headers = new HttpHeaders().set('Authorization', 'Bearer token');
const params = new HttpParams().set('store', '');

@Injectable({
  providedIn: 'root'
})
export class Data {
  constructor(private http: HttpClient) {}

  // check service status
  checkStatus(): Observable<any> {
    return this.http.get('http://127.0.0.1:8080/dap/api/v1.0/des/status')
  }

  // post request
  getCoupons(store: string): Observable<any> {
    // store_name: string = '';
    return this.http.post('http://127.0.0.1:8080/dap/api/v1.0/des/promoco?store={}', store);
  }
}
