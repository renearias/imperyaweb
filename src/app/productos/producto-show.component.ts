/* 
 *  Rene Arias
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {ProductoFormComponent}  from './producto-form.component';
import {ProductoDetailComponent}  from './producto-detail.component';
import {ProductoService}  from './producto.service';
import {Producto}  from './producto';


@Component({
  selector: 'producto-detail',
  //templateUrl: './producto-form.component.html'
  //encapsulation: ViewEncapsulation.None,
  //templateUrl: './app/productos/producto-detail.component.html',
  template:"<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
  //styles: [require('../components/forms-elements/forms-elements.scss')]
})
@Routes([
  { path: '/', component: ProductoDetailComponent },
  { path: '/edit', component: ProductoFormComponent }
])
export class ProductoShowComponent {
  
}

