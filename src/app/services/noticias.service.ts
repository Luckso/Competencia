import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResTopHeadlines } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) {  }

  getTopHeadLines() {
      // tslint:disable-next-line: max-line-length
      return this.http.get<ResTopHeadlines>(`https://gnews.io/api/v3/topics/nation?token=772f2fae750a1627c37ddd483ef078c7&lang=es&country=bo`);
  }
}
