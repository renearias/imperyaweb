import {Injectable} from '@angular/core';
import {Factura} from './factura';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {FacturaRESTClient} from './factura-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';
import {EntityService} from '../services/entity-service';

@Injectable()
export class FacturaService extends EntityService implements EntityServiceInterface{
    
  constructor(private facturaRESTClient: FacturaRESTClient){
      super(facturaRESTClient);
  }
}