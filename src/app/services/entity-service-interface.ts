import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {EntityInterface} from  '../models/entity-interface';
import {EntityRESTClientInterface} from '../rest/entity-rest-client-interface';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';

export interface EntityServiceInterface {
  
  getAll(id: number | string): any;
  get(id: number | string): any;
  crear(entity: EntityInterface): any;
  editar(entity: EntityInterface): any;
  eliminar(id: number | string): Observable<any>;
}

