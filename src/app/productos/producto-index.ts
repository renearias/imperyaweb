import {Component, ViewEncapsulation, ComponentResolver, ViewContainerRef, ViewChild, ElementRef, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthHttp} from 'angular2-jwt';
import {Widget} from '../core/widget/widget';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import '../components/tables-dynamic';
import {columnAction} from '../components/tables-dynamic/columnAction';
import {ConfigService} from '../core/config';
import {DynamicDataTable} from '../components/tables-dynamic/dynamic-datatable';

declare var jQuery: any;
declare var Datatable: any;

@Component({
	selector: 'producto-index',
        encapsulation: ViewEncapsulation.None,
	templateUrl: './app/productos/producto-index.html',
	directives: [Widget, ROUTER_DIRECTIVES, DynamicDataTable],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ProductosIndexPage {
    urlApi: string;
    router: any;
    columns: any = [
                 {'title': 'Id', 'data': 'id'},
                 {'title': 'Descripcion Corta', 'data': 'descripcionCorta' },
                 {'title': 'Referencia', 'data': 'referencia' },
                 {'title': 'Descripcion', 'data': 'descripcion' },
                 {'title': 'Stock', 'data': 'stock' },
                 {'title': 'Precio PVP', 'data': 'precioPvp' },
                 {'title': 'tipo', 'data': 'tipo' },
                 ];
    routeActions = 'app/productos/';
    constructor(config: ConfigService, router: Router) {
        this.urlApi = config.config.urlApi + 'api/productos';
        this.router = router;
   }
   ngOnInit(): void {
    /*let searchInput = jQuery('#table-search-input');
    searchInput
      .focus((e) => {
      jQuery(e.target).closest('.input-group').addClass('focus');
    })
      .focusout((e) => {
      jQuery(e.target).closest('.input-group').removeClass('focus');
    });*/
  }
}
