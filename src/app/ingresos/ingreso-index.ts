import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ConfigService} from '../core/config';
import {DynamicDataTable} from '../components/tables-dynamic/dynamic-datatable';
import {columnDateTime} from '../components/tables-dynamic/columnAction';
declare var jQuery: any;
declare var Datatable: any;

@Component({
	selector: 'ingreso-index',
        encapsulation: ViewEncapsulation.None,
	template: require('./ingreso-index.html'),
	directives: [Widget, ROUTER_DIRECTIVES, DynamicDataTable],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class IngresosIndexPage {
    urlApi: string;
    router: any;
    columns:any=[
                 {'title': 'Id', 'data': 'id'},
                 columnDateTime('Fecha','fecha'),
                 {'title': 'Monto', 'data': 'monto' },
                 {'title': 'Cliente', 'data': 'cliente.nombre' }
                 ];
    routeActions="app/ingresos/";
    constructor(config: ConfigService) {
        this.urlApi = config.config.urlApi+'api/ingresos';
   }
   
   ngOnInit(): void {

  }
}
