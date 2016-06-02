import {Component, provide} from '@angular/core';
import {IngresosIndexPage} from './ingreso-index';
import {IngresoFormComponent} from './ingreso-form.component';
import {IngresoShowComponent} from './ingreso-show.component';
import {IngresoRESTClient} from './ingreso-rest.client';
import {IngresoService} from './ingreso.service';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AuthHttp} from 'angular2-jwt';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';

@Component({
    selector: 'ingresos',
    directives: [ROUTER_DIRECTIVES, IngresoFormComponent,IngresosIndexPage],
    templateUrl: 'app/ingresos/ingresos.html',
    viewProviders: [IngresoService, IngresoRESTClient],
})
@Routes([
  { path: '/', component: IngresosIndexPage },
  { path: '/new', component: IngresoFormComponent },
  { path: '/:id', component: IngresoShowComponent }
])
export class IngresosPage {

}