/* 
 *  Abner Saavedra
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {ClienteFormComponent}  from './cliente-form.component';
import {ClienteDetailComponent}  from './cliente-detail.component';
import {ClienteService}  from './cliente.service';
import {Cliente}  from './cliente';


@Component({
  selector: 'cliente-detail',
  template:"<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/', component: ClienteDetailComponent },
  { path: '/edit', component: ClienteFormComponent }
])
export class ClienteShowComponent {
  
}

