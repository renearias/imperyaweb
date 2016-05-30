import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {RESTClient, GET, PUT, PATCH, POST, DELETE, BaseUrl, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';

import {urlApi} from  '../http/http';
import {Cliente} from './cliente';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class ClienteRESTClient extends RESTClient {

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
    

    @GET("clients/")
    public getClientes( @Query("sort") sort?: string): Observable<Response> { return null; };

    @GET("clients/{id}")
    public getClienteById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("clients")
    public postCliente( @Body cliente: Cliente): Observable<Response> { return null; };

    @PUT("clients/{id}")
    public putClienteById( @Path("id") id: number | string, @Body cliente: Cliente): Observable<Response> { return null; };
    
    @PATCH("clients/{id}")
    public patchClienteById( @Path("id") id: number | string, @Body cliente: Cliente): Observable<Response> { return null; };

    @DELETE("clients/{id}")
    public deleteClienteById( @Path("id") id: number | string): Observable<Response> { return null; };

}