import {Component} from '@angular/core';
import {ProductoFormComponent} from './producto-form.component'

@Component({
	selector: 'products',
	template: require('./products.html'),
        directives: [ProductoFormComponent]
})
export class ProductsPage {
}
