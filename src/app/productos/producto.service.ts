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
      
    return this.productoRESTClient.getProductoById(id);
                      
    //return productoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crearProducto(producto: Producto) {
      producto.prepareToSend();
      return this.productoRESTClient.postProducto(producto);
    
  }
  editarProducto(producto: Producto) {
      let id = producto['id'];
      producto.prepareToSend();
      return this.productoRESTClient.putProductoById(id,producto);
    
  }
}