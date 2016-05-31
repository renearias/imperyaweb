import {Injectable} from '@angular/core';
import {Producto} from './producto';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ProductoRESTClient} from './producto-rest.client';

  export interface EntityServiceInterface {
    
  constructor(private authHttp: AuthHttp, private entityRESTClient: EntityRESTClient){
      
  }
  get(id: number | string) {  }
  crear(entity: Entity) {  }
  editar(entity: Entity) {  }
}

