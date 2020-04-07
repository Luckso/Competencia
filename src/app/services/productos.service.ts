import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    {
        nombre: 'Aceite ',
        // tslint:disable-next-line: max-line-length
        desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
        img: '',
        precio_sugerido: '15',
    },
    {
      nombre: 'Azúcar',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '25',
    },
    {
      nombre: 'Harina',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '10',
    },
    {
      nombre: 'Sal',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '6',
    },
    {
      nombre: 'Pan',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '0,50',
    },
    {
      nombre: 'Huevos',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '20',
    },
    {
      nombre: 'Ajo',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: '',
      precio_sugerido: '5',
    },
];

  constructor() { }

getProductos() {
    return this.productos;
}
getProducto( idx: string ) {
    return this.productos[idx];
}
}

export interface Producto {
  // tslint:disable-next-line: ban-types
  nombre: String;
  // tslint:disable-next-line: ban-types
  desc: String;
  // tslint:disable-next-line: ban-types
  img: String;
  // tslint:disable-next-line: ban-types
  precio_sugerido: String;
}
