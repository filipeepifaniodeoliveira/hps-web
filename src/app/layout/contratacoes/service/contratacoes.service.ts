import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContratacoesService {

  //injetando o HttpClient
  constructor(private httpClient: HttpClient, public router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDocContratacoes(): Observable<any> {
    return this.httpClient.get<any>('http://hospitalpalmirasales.com/content/portal/contratos_forn');
  }

}