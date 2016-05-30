import {Component, provide} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AuthHttp} from 'angular2-jwt';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';

import {IngresosIndexPage} from './ingreso-index';
import {IngresoFormComponent} from './ingreso-form.component';
import {IngresoDetailComponent} from './ingreso-detail.component';
import {IngresoShowComponent} from './ingreso-show.component';
import {IngresoRESTClient} from './ingreso-rest.client';
import {IngresoService} from './ingreso.service';

@Routes([
  { path: '/', component: IngresosIndexPage },
  { path: '/new', component: IngresoFormComponent },
  { path: '/:id', component: IngresoDetailComponent }
])
@Component({
    selector: 'ingresos',
    directives: [ROUTER_DIRECTIVES, IngresoFormComponent,IngresosIndexPage],
    templateUrl: 'app/ingresos/ingresos.html',
    viewProviders: [IngresoService, IngresoRESTClient],
    host: {
    class: 'ingresos-page app'
    }
})
export class IngresosPage {

}