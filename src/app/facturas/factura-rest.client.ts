import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {RESTClient, GET, PUT, PATCH, POST, DELETE, BaseUrl, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';
 import {EntityRESTClientInterface} from '../rest/entity-rest-client-interface';
import {urlApi} from  '../http/http';
import {Factura} from './factura';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class FacturaRESTClient extends RESTClient implements EntityRESTClientInterface {
    public constructor( protected authHttp: AuthHttp) {
        super(authHttp);
    }
    

    @GET("facturas/")
    public getAll( @Query("sort") sort?: string): Observable<Response> { return null; };

    @GET("facturas/{id}")
    public getOneById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("facturas")
    public post( @Body factura: Factura): Observable<Response> { return null; };

    @PUT("facturas/{id}")
    public putOneById( @Path("id") id: number | string, @Body factura: Factura): Observable<Response> { return null; };
    
    @PATCH("facturas/{id}")
    public patchOneById( @Path("id") id: number | string, @Body factura: Factura): Observable<Response> { return null; };

    @DELETE("facturas/{id}")
    public deleteOneById( @Path("id") id: number | string): Observable<Response> { return null; };

}