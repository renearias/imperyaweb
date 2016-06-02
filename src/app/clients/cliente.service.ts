import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ClienteRESTClient} from './cliente-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';
import {EntityService} from '../services/entity-service';

@Injectable()
export class ClienteService extends EntityService implements EntityServiceInterface{
    
  constructor(private clienteRESTClient: ClienteRESTClient){
      super(clienteRESTClient);
  }
}