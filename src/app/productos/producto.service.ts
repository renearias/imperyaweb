import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {ProductoRESTClient} from './producto-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';
import {EntityService} from '../services/entity-service';

@Injectable()
export class ProductoService extends EntityService implements EntityServiceInterface{
    
  constructor(private productoRESTClient: ProductoRESTClient){
      super(productoRESTClient);
  }
}