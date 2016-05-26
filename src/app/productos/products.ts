import {Component} from '@angular/core';
import {ProductosIndexPage} from './producto-index';
import {ProductoFormComponent} from './producto-form.component';
import {ProductoDetailComponent} from './producto-detail.component';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
	selector: 'products',
	templateUrl: './app/productos/products.html',
        directives: [ROUTER_DIRECTIVES, ProductoFormComponent, ProductosIndexPage]
})
@Routes([
  { path: '/', component: ProductosIndexPage },
  { path: '/new', component: ProductoFormComponent },
  { path: '/:id', component: ProductoDetailComponent }
])
export class ProductsPage {
}
