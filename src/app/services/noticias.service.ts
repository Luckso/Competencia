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
      return this.http.get<ResTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=80f6e96f30f0472fa7f605288a7b606d`);
  }
}
