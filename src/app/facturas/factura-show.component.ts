/* 
 *  Rene Arias
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {FacturaFormComponent}  from './factura-form.component';
import {FacturaDetailComponent}  from './factura-detail.component';
import {FacturaService}  from './factura.service';
import {Factura}  from './factura';


@Component({
  selector: 'factura-detail',
  template:"<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: FacturaDetailComponent },
  { path: '/edit', component: FacturaFormComponent }
])
export class FacturaShowComponent {
  
}

