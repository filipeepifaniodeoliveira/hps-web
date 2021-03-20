import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  //injetando o HttpClient
  constructor(private httpClient: HttpClient, public router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getMembros(): Observable<any> {
    return this.httpClient.get<any>('http://hospitalpalmirasales.com/content/portal/membros');
  }

}