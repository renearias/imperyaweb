import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {RESTClient, GET, PUT,PATCH, POST, DELETE, BaseUrl, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';
import {EntityRESTClientInterface} from '../rest/entity-rest-client-interface';

import {urlApi} from  '../http/http';
import {Ingreso} from './ingreso';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class IngresoRESTClient extends RESTClient implements EntityRESTClientInterface {

    /*protected requestInterceptor(req: Request) {
        if (SessionFactory.getInstance().isAuthenticated) {
            req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
        }
    }*/

    /*protected requestInterceptor(req: Response) {
        // do sg with responses
    }*/
    
    public constructor( protected authHttp: AuthHttp) {
        super(authHttp);
    }
    

    @GET("ingresos/")
    public getAll( @Query("sort") sort?: string): Observable<Response> { return null; };

    @GET("ingresos/{id}")
    public getOneById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("ingresos")
    public post( @Body ingreso: Ingreso): Observable<Response> { return null; };

    @PUT("ingresos/{id}")
    public putOneById( @Path("id") id: number | string, @Body ingreso: Ingreso): Observable<Response> { return null; };
    
    @PATCH("ingresos/{id}")
    public patchOneById( @Path("id") id: number | string, @Body ingreso: Ingreso): Observable<Response> { return null; };

    @DELETE("ingresos/{id}")
    public deleteOneById( @Path("id") id: number | string): Observable<Response> { return null; };

}