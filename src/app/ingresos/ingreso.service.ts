import {Injectable} from '@angular/core';
import {Ingreso} from './ingreso';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {EntityServiceInterface} from '../services/entity-service-interface';
import {EntityService} from '../services/entity-service';
import {IngresoRESTClient} from './ingreso-rest.client';

@Injectable()
export class IngresoService extends EntityService implements EntityServiceInterface{
    
  constructor(private ingresoRESTClient: IngresoRESTClient){
      super(ingresoRESTClient);
  }
}
