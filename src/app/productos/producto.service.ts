import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ProductoRESTClient} from './producto-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';

let PRODUCTOS = [

];
let heroesPromise = Promise.resolve(PRODUCTOS);
@Injectable()
export class ProductoService implements EntityServiceInterface{
    
  constructor(private authHttp: AuthHttp, private productoRESTClient: ProductoRESTClient){
      
  }
  getAll() { return heroesPromise; }
  get(id: number | string) {
      
    return this.productoRESTClient.getOneById(id);
                      
    //return productoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crear(producto: Producto) {
      return this.productoRESTClient.post(producto.prepareToSend());
  }
  editar(producto: Producto) {
      let id = producto['id'];
      return this.productoRESTClient.putOneById(id,producto.prepareToSend());
  }
  eliminar(id: number) {
      
  }
}