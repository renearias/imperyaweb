import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ConfigService} from '../core/config';
import {DynamicDataTable} from '../components/tables-dynamic/dynamic-datatable';
import {columnDateTime} from '../components/tables-dynamic/columnAction';
import {IngresoService} from './ingreso.service';
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
    columns: any= [
                 {'title': 'Id', 'data': 'id'},
                 columnDateTime('Fecha', 'fecha'),
                 {'title': 'Monto', 'data': 'monto'},
                 {'title': 'Cliente', 'data': 'cliente.nombre'},
                 {'title': 'Forma de Pago', 'data': 'formaPago.formaPago'},
                 {'title': 'Cobrado Por', 'data': 'collectedby.name'}
                 ];
     footerCallback: any = function ( tfoot, data, start, end, display ) {
                                                var api = this.api(), data;

                                        var intVal = function (i: any) {
                                            return +i
                                        };
                                        // Total over this page
                                        var pageTotal = api
                                            .column( 2, { page: 'current'} )
                                            .data()
                                            .reduce( function (a, b) {
                                                return intVal(a) + intVal(b);
                                            }, 0 );
                                        // Update footer
                                        jQuery("#ingresos_datatable").find("tfoot").html('<tr><td colspan="7"><strong> Total =  $'+(Math.round(pageTotal*100)/100)+'</strong></td></tr>');
                                        /*jQuery(api.column(2).footer()).html(
                                            '$'+(Math.round(pageTotal*100)/100)
                                        );*/
                                    }
    
    routeActions = 'app/ingresos/';
    constructor(config: ConfigService ) {
        this.urlApi = config.config.urlApi + 'api/ingresos/results';
   }
   ngOnInit(): void {
       
  }
}

