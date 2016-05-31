import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {ProductoRESTClient} from './producto-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';

@Injectable()
export class ProductoService implements EntityServiceInterface{
    
  constructor(private productoRESTClient: ProductoRESTClient){
      
  }
  getAll() { return []; }
  get(id: number | string) {
    return this.productoRESTClient.getOneById(id);
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