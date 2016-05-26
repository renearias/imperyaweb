/* 
 *
 *Abner Saavedra
 * 
 */
import {Request, Response} from '@angular/http';
import {RESTIngreso, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from '../rest/rest-ingreso';
import {Injectable} from '@angular/core';
import {Ingreso} from '../../models';
import {SessionFactory} from './sessionFactory';

@Injectable()
@BaseUrl('http://imperya.arxis.la/api/')
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class IngresoRESTIngreso extends RESTIngreso {

    protected requestInterceptor(req: Request) {
        if (SessionFactory.getInstance().isAuthenticated) {
            req.headers.append('jwt', SessionFactory.getInstance().credentials.jwt);
        }
    }

    protected requestInterceptor(req: Response) {
        // do sg with responses
    }

    @GET('ingreso/')
    public getIngresos( @Query('sort') sort?: string): Observable { return null; };

    @GET('ingreso/{id}')
    public getIngresoById( @Path('id') id: string): Observable { return null; };

    @POST('ingreso')
    public postIngreso( @Body ingreso: Ingreso): Observable { return null; };

    @PUT('ingreso/{id}')
    public putIngresoById( @Path('id') id: string, @Body ingreso: Ingreso): Observable { return null; };

    @DELETE('ingreso/{id}')
    public deleteIngresoById( @Path('id') id: string): Observable { return null; };

}



