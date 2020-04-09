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
        img: 'https://fino.com.bo/wp-content/uploads/2019/08/aceite.png ',
        precio_sugerido: '15',
    },
    {
      nombre: 'Azúcar',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      // tslint:disable-next-line: max-line-length
      img: 'https://lh3.googleusercontent.com/proxy/AlvkKsash5az0y_WzUCbsVOWbmIwuhiCokcQV4dQqGCLCxVE3Lv4Ejq5i0Tgi6cAHJBDzNPMEnEWTIEnJT7752kJf-8MwZQfGdANZtbJMdvxLchayVtZ3AfaVu5_EIpkfC8bhQ',
      precio_sugerido: '25',
    },
    {
      nombre: 'Harina',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: 'https://cdn.shopify.com/s/files/1/0041/4947/7446/products/AFH010_grande.jpg?v=1542288559',
      precio_sugerido: '10',
    },
    {
      nombre: 'Sal',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: 'https://promabol.com/wp-content/uploads/2018/09/sal1.jpg',
      precio_sugerido: '5',
    },
    {
      nombre: 'Pan',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: 'https://radiofides.com/es/wp-content/uploads/2018/04/pan-de-batalla.jpg',
      precio_sugerido: '0,50',
    },
    {
      nombre: 'Huevos',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      // tslint:disable-next-line: max-line-length
      img: 'https://4.bp.blogspot.com/-iqeHWuWPRYs/VxdzuCkCVhI/AAAAAAAABe0/K4YW2GVta0Ui_dadR0di-zwuisq9XHYxwCLcB/s1600/se-vende-huevos-por-mayor-y-menor-14888425.jpg',
      precio_sugerido: '20',
    },
    {
      nombre: 'Ajo',
      // tslint:disable-next-line: max-line-length
      desc: 'Nulla justo sem, ornare et tortor in, sagittis vestibulum nulla. Mauris ullamcorper eu nisl eget luctus. Aliquam nec nisi tortor. Cras porta vel velit sit amet vehicula.',
      img: 'https://www.pngfind.com/pngs/m/371-3713057_cabeza-de-ajo-png-png-download-1-cabeza.png',
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
