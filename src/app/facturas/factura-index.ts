import {Component, ViewEncapsulation, ComponentResolver, ViewContainerRef, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthHttp} from 'angular2-jwt';
import {Widget} from '../core/widget/widget';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import '../components/tables-dynamic';
import {columnAction} from '../components/tables-dynamic/columnAction';
import {ConfigService} from '../core/config';
import {DynamicDataTable} from '../components/tables-dynamic/dynamic-datatable';
import {columnDateTime} from '../components/tables-dynamic/columnAction';

declare var jQuery: any;
declare var Datatable: any;

@Component({
	selector: 'factura-index',
        encapsulation: ViewEncapsulation.None,
	templateUrl: './app/facturas/factura-index.html',
	directives: [Widget, ROUTER_DIRECTIVES, DynamicDataTable],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class FacturasIndexPage {
    urlApi: string;
    router: any;
    columns: any = [
                 {'title': 'Id', 'data': 'id'},
                 {'title': 'Legal', 'data': 'legal' },
                 columnDateTime('Emitido','emitido'),
                 columnDateTime('Vencimiento','vencimiento'),
                 columnDateTime('Pago','pago'),
                 {'title': 'Estado', 'data': 'estado' },
                 {'title': 'Tipo', 'data': 'tipo' },
                 {'title': 'Cobrado', 'data': 'cobrado' },
                 {'title': 'Descuento', 'data': 'descuento' },
                 {'title': 'Total', 'data': 'total' }
                 ];
    routeActions = 'app/facturas/';
    constructor(config: ConfigService, router: Router, private element: ElementRef, private location: Location) {
        this.urlApi = config.config.urlApi + 'api/facturas';
        this.router = router;
   }
   ngOnInit(): void {
  }
}
