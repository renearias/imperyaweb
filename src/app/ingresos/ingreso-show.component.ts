/* 
 *  Abner Saavedra
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {IngresoFormComponent}  from './ingreso-form.component';
import {IngresoDetailComponent}  from './ingreso-detail.component';
import {IngresoService}  from './ingreso.service';
import {Ingreso}  from './ingreso';


@Component({
  selector: 'ingreso-detail',
  template:"<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: IngresoDetailComponent },
  { path: '/edit', component: IngresoFormComponent }
])
export class IngresoShowComponent {
  
}


