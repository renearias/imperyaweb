import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ProductoRESTClient} from './producto-rest.client';

let PRODUCTOS = [
  new Producto(11, 'Mr. Nice',3,'Bien',new Date()),
  new Producto(12, 'Narco',9,'Servicio',new Date()),
  new Producto(13, 'Bombasto',9,'Servicio',new Date()),
  new Producto(14, 'Celeritas',92,'Servicio',new Date()),
  new Producto(15, 'Magneta',67,'Servicio',new Date()),
  new Producto(16, 'RubberMan',12,'Bien',new Date()),
];
let heroesPromise = Promise.resolve(PRODUCTOS);
@Injectable()
export class ProductoService {
    
  constructor(private authHttp: AuthHttp, private productoRESTClient: ProductoRESTClient){
      
  }
  getProductos() { return heroesPromise; }
  getProducto(id: number | string) {
      
    return this.productoRESTClient.getProductoById(id);
                      
    //return productoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}