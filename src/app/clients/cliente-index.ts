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
	selector: 'cliente-index',
        encapsulation: ViewEncapsulation.None,
	templateUrl: './app/clients/cliente-index.html',
	directives: [Widget, ROUTER_DIRECTIVES, DynamicDataTable],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ClientesIndexPage {
    urlApi: string;
    router: any;
    columns: any = [
                 {'title': 'Id', 'data': 'id'},
                 {'title': 'Nombre', 'data': 'nombre' },
                 {'title': 'Nombre Comercial', 'data': 'nombrecomercial' },
                 {'title': 'Correo Electrónico', 'data': 'email' },
                 {'title': 'Registro Empresarial', 'data': 'registroempresarial' }
                 ];
    routeActions = 'app/clients/';
    constructor(config: ConfigService, router: Router) {
        this.urlApi = config.config.urlApi + 'api/clientes';
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



