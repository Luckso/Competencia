import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interface/interface';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache : 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
};

  news: Article[] = [];
  constructor( private noticiasService: NoticiasService, private iab: InAppBrowser ) {}

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe( resp => {
      console.log('noticias', resp);
      // Inserción de manera independiente en el arreglo news
      this.news.push( ...resp.articles );
    });
  }

  public openWithSystemBrowser(url: string) {
    const target = '_system';
    this.iab.create(url, target, this.options);
  }
}
