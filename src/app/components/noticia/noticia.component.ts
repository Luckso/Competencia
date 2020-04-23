import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interface/interface';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() item: Article;
  @Input() indice: number;

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
  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private social: SocialSharing ) { }

  ngOnInit() {}

  public openWithSystemBrowser(url: string) {
    const target = '_system';
    this.iab.create(url, target, this.options);
  }

  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.social.share(
            this.item.title,
            this.item.source.name,
            '',
            this.item.url,
          );
        }
      },
      {
        text: 'Cerrar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
