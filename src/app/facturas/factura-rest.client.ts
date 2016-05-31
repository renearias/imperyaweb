import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {RESTClient, GET, PUT, PATCH, POST, DELETE, BaseUrl, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';

import {urlApi} from  '../http/http';
import {Factura} from './factura';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class FacturaRESTClient extends RESTClient implements EntityRESTClientInterface{
    public constructor( protected authHttp: AuthHttp) {
        super(authHttp);
    }
    

    @GET("facturas/")
    public getFacturas( @Query("sort") sort?: string): Observable<Response> { return null; };

    @GET("facturas/{id}")
    public getFacturaById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("facturas")
    public postFactura( @Body factura: Factura): Observable<Response> { return null; };

    @PUT("facturas/{id}")
    public putFacturaById( @Path("id") id: number | string, @Body factura: Factura): Observable<Response> { return null; };
    
    @PATCH("facturas/{id}")
    public patchFacturaById( @Path("id") id: number | string, @Body factura: Factura): Observable<Response> { return null; };

    @DELETE("facturas/{id}")
    public deleteFacturaById( @Path("id") id: number | string): Observable<Response> { return null; };

}