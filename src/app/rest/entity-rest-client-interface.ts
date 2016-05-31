import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {EntityInterface} from '../models/entity-interface';

export interface EntityRESTClientInterface {
    
    getAll(sort?: string): Observable<Response>;

    getOneById(id: number | string): Observable<Response>;

    post(entity: EntityInterface): Observable<Response> ;

    putOneById(id: number | string, entity: EntityInterface): Observable<Response> ;

    patchOneById(id: number | string, entity: EntityInterface): Observable<Response> ;
    
    deleteOneById(id: number | string): Observable<Response>;
}


