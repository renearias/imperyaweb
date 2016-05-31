import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ProductoRESTClient} from './producto-rest.client';

let PRODUCTOS = [

];
let heroesPromise = Promise.resolve(PRODUCTOS);
@Injectable()
export class ProductoService {
    
  constructor(private authHttp: AuthHttp, private productoRESTClient: ProductoRESTClient){
      
  }
  getProductos() { return heroesPromise; }
  getProducto(id: number | string) {
      
    return this.productoRESTClient.getOneById(id);
                      
    //return productoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crearProducto(producto: Producto) {
      return this.productoRESTClient.post(producto.prepareToSend());
  }
  editarProducto(producto: Producto) {
      let id = producto['id'];
      return this.productoRESTClient.putOneById(id,producto.prepareToSend());
  }
}