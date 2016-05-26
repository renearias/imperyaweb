import {Injectable} from "@angular/core";
import {AuthHttp} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Request, Response} from '@angular/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from '../rest/rest-client';

import {urlApi} from  '../http/http';
import {Producto} from './producto';

@Injectable()
@BaseUrl(urlApi + "api/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class ProductoRESTClient extends RESTClient {

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
    

    @GET("productos/")
    public getProductos( @Query("sort") sort?: string): Observable<any> { return null; };

    @GET("productos/{id}")
    public getProductoById( @Path("id") id: number | string): Observable<Response> { return null; };

    @POST("productos")
    public postProducto( @Body producto: Producto): Observable<any> { return null; };

    @PUT("productos/{id}")
    public putProductoById( @Path("id") id: number | string, @Body producto: Producto): Observable<any> { return null; };

    @DELETE("productos/{id}")
    public deleteProductoById( @Path("id") id: number | string): Observable<any> { return null; };

}