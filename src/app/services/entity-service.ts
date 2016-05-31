import {Injectable} from '@angular/core';
import {EntityInterface} from '../models/entity-interface';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {EntityInterfaceRESTClient} from './entity-rest.client';
import {EntityServiceInterface} from '../services/entity-service-interface';

let PRODUCTOS = [

];
let heroesPromise = Promise.resolve(PRODUCTOS);
@Injectable()
export class EntityInterfaceService implements EntityServiceInterface{
    
  constructor(private authHttp: AuthHttp, private entityRESTClient: EntityInterfaceRESTClient){
      
  }
  getAll() { return heroesPromise; }
  get(id: number | string) {
      
    return this.entityRESTClient.getOneById(id);
                      
    //return entityPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crear(entity: EntityInterface) {
      return this.entityRESTClient.post(entity.prepareToSend());
  }
  editar(entity: EntityInterface) {
      let id = entity['id'];
      return this.entityRESTClient.putOneById(id,entity.prepareToSend());
  }
  eliminar(id: number) {
      
  }
}