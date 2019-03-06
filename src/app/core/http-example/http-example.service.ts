import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(private httpClient: HttpClient) { }

  getAllPeople(): Observable<any> {
    return this.httpClient.get('https://swapi.co/api/people/');
  }

  getPerson(id: number): Observable<any> {
    return this.httpClient.get('https://swapi.co/api/people/'+id);
  }
}
