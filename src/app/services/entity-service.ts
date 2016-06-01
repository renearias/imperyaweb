import {Injectable} from '@angular/core';
import {EntityInterface} from '../models/entity-interface';
import {EntityRESTClientInterface} from '../rest/entity-rest-client-interface';
import {EntityServiceInterface} from '../services/entity-service-interface';

@Injectable()
export abstract class EntityService implements EntityServiceInterface{
    
  constructor(public entityRESTClient: EntityRESTClientInterface){
      
  }
  getAll() { return []; }
  get(id: number | string) {
    return this.entityRESTClient.getOneById(id);
  }
  crear(entity: EntityInterface) {
      return this.entityRESTClient.post(entity.prepareToSend());
  }
  editar(entity: EntityInterface) {
      let id = entity['id'];
      return this.entityRESTClient.putOneById(id,entity.prepareToSend());
  }
  eliminar(id: number | string) {
      return this.entityRESTClient.deleteOneById(id);
  }
}