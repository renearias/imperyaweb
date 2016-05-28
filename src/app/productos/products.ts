import {Component, provide} from '@angular/core';
import {ProductosIndexPage} from './producto-index';
import {ProductoFormComponent} from './producto-form.component';
import {ProductoShowComponent} from './producto-show.component';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {ProductoService}  from './producto.service';
import {ProductoRESTClient}  from './producto-rest.client';
import {AuthHttp} from 'angular2-jwt';

@Component({
	selector: 'products',
	templateUrl: './app/productos/products.html',
        directives: [ROUTER_DIRECTIVES, ProductoFormComponent, ProductosIndexPage],
        viewProviders: [ProductoService, ProductoRESTClient],
})
@Routes([
  { path: '/', component: ProductosIndexPage },
  { path: '/new', component: ProductoFormComponent },
  { path: '/:id', component: ProductoShowComponent },
])
export class ProductsPage {
}
