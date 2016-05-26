import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';

import {urlApi} from  '../http/http';
import {Ingreso} from './ingreso';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class IngresoRESTClient extends RESTClient {

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
    public getIngresos( @Query("sort") sort?: string): Observable<Response> { return null; };

    @GET("ingresos/{id}")
    public getIngresoById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("ingresos")
    public postIngreso( @Body ingreso: Ingreso): Observable<Response> { return null; };

    @PUT("ingresos/{id}")
    public putIngresoById( @Path("id") id: number | string, @Body ingreso: Ingreso): Observable<Response> { return null; };

    @DELETE("ingresos/{id}")
    public deleteIngresoById( @Path("id") id: number | string): Observable<Response> { return null; };

}