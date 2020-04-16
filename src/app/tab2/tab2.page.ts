import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  prod: Producto[] = [];
  constructor( private productosService: ProductosService ) {}

  ngOnInit() {
    this.prod = this.productosService.getProductos();
    console.log(this.day());
    // console.log(this.prod);
  }

  day() {
    const d = new Date();
    const n = d.getDay();
    return n;
  }

}
