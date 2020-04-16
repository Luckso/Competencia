import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment,
  MarkerOptions,
  LatLng
} from '@ionic-native/google-maps';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { mapStyle } from './mapStyle';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  map: GoogleMap;
  loading: any;
  style = mapStyle;
  markers: any[] = [
    {
      position:{
        lat: -17.410784,
        lng: -66.151423,
      },
      title: 'Mercado 1'
    },
    {
      position: {
        lat: -17.43,
        lng: -66.19,
      },
      title: 'Mercado 2'
    },
    {
      position: {
        lat: -17.43,
        lng: -66.19,
      },
      title: 'Mercado 3'
    },
    {
      position: {
        lat: -17.43,
        lng: -66.19,
      },
      title: 'Mercado 4'
    },
  ];

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBUf2cDjX6QTyLvUYGe5IQs748Sn_UzBKs',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBUf2cDjX6QTyLvUYGe5IQs748Sn_UzBKs'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: -17.410784,
          lng: -66.151423
        },
        zoom: 18,
        tilt: 30
      },
      styles: this.style
    });

    // this.markers.forEach(marker => {
    //   this.addMarker(marker);
    // });
  }

  // addMarker(options){
  //   const markerOptions: MarkerOptions = {
  //     position: new LatLng(options.position.latitude, options.position.longitude),
  //     title: options.title,
  //   };
  //   this.map.addMarker(markerOptions);
  // }

  async localizar() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Espera por favor...'
    });
    await this.loading.present();

    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        this.loading.dismiss();

        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        let marker: Marker = this.map.addMarkerSync({
          title: 'Estoy aquí!',
          snippet: 'lorem',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        marker.showInfoWindow();

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('clicked!');
        });
      })
      .catch(error => {
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }

  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
