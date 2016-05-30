import {Component, provide} from '@angular/core';
import {ClientesIndexPage} from './cliente-index';
import {ClienteFormComponent} from './cliente-form.component';
import {ClienteShowComponent} from './cliente-show.component';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {ClienteService}  from './cliente.service';
import {ClienteRESTClient}  from './cliente-rest.client';
import {AuthHttp} from 'angular2-jwt';

@Component({
	selector: 'products',
	templateUrl: './app/cliente/clients.html',
        directives: [ROUTER_DIRECTIVES, ClienteFormComponent, ClientesIndexPage],
        viewProviders: [ClienteService, ClienteRESTClient],
})
@Routes([
  { path: '/', component: ClientesIndexPage },
  { path: '/new', component: ClienteFormComponent },
  { path: '/:id', component: ClienteShowComponent },
])
export class ClientsPage {
    
}
