import {Component} from '@angular/core';
import {ProductosIndexPage} from './producto-index';
import {ProductoFormComponent} from './producto-form.component';

@Component({
	selector: 'products',
	template: require('./products.html'),
        directives: [ProductoFormComponent, ProductosIndexPage]
})
export class ProductsPage {
}
