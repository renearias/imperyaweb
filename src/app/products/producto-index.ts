import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Widget} from '../core/widget/widget';
import {ROUTER_DIRECTIVES} from '@angular/router';

import '../components/tables-dynamic';
import {columnAction} from '../components/tables-dynamic/columnAction';
import {ConfigService} from '../core/config';

declare var jQuery: any;
declare var Datatable: any;

@Component({
	selector: 'producto-index',
        encapsulation: ViewEncapsulation.None,
	template: require('./producto-index.html'),
	directives: [Widget, ROUTER_DIRECTIVES],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ProductosIndexPage {
    urlApi: string;
    constructor(config: ConfigService) {
        this.urlApi = config.config.urlApi;
   }
   ngOnInit(): void {
    /* jQuery('#angularDataTableTest').DataTable(
                {
                    order: [[ 0, "asc" ]],
                    language:require("../components/tables-dynamic/translations/es-ES.json"),
                    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                    data: this.data,
                columns: [
                    { title:'Id', data: 'id' },
                    { title:'Nombre', data: 'name', 
                      render: function(data) {
                                if ("" == data) {
                                      return "";
                                    } else {
                                        return "<span class='fw-semi-bold'>"+data+"</span>";
                                    }  
                                },
                    },
                    { title:'Info', data: 'info',
                      render: function(data) {
                                    if ("" == data) {
                                        return "";
                                    } else {
                                        return "<small>"+
                                                  "<span class='fw-semi-bold'>Type:</span>"+
                                                  "&nbsp; "+data.type+
                                                "</small>"+
                                                "<br>"+
                                                "<small>"+
                                                  "<span class='fw-semi-bold'>Dimensions:</span>"+
                                                  "&nbsp; "+data.dimensions+
                                                "</small>";
                                    }  
                                },  
                      
                      },
                      { title:'Descripcion', data: 'description', 
                      render: function(data) {
                                if ("" == data) {
                                      return "";
                                    } else {
                                        return "<a href='#'>"+data+"</a>";
                                    }  
                                },
                    },  
                    { title:'Estado', data: 'status', 
                      render: function(data) {
                                if ("" == data) {
                                      return "";
                                    } else {
                                        return '<div class="bg-gray-lighter progress-bar mt-xs">'+
                                                  '<progress class="progress progress-sm progress-'+data.type+'" value="100" max="100" style="width: '+data.progress+';"></progress>'+
                                                '</div>';
                                    }  
                                },
                    },  
                    columnAction
                ]}
        );*/
        var oTable = jQuery('#productosDataTable').dataTable(
                {
                    //'order': [[ 0, 'asc' ]],
                    'dom': "<'row'<'col-sm-2'l><'col-sm-4 col-xs-12'B><'col-sm-6 col-xs-12'f>>" +
                         "<'row'<'col-sm-12'tr>>" +
                         "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                    'buttons': [
                        'copy', 'excel', 'pdf'
                    ],
                    
                    'language': require('../components/tables-dynamic/translations/es-ES.json'),
                    'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'Todos']],
                    'processing': true,
                    'serverSide': true,
                    'responsive': true,
                    'columns': [
                            { 'data': 'id'},
                            { 'data': 'descripcionCorta' },
                            { 'data': 'stock' },
                            columnAction('app/productos/')
                        ],
                    'ajax': {
                        'url': this.urlApi + 'api/productos',
                        'type': 'GET',
                        'beforeSend': function (request) {
                            request.setRequestHeader('Accept', 'application/json');
                            var token = localStorage.getItem('id_token');
                            request.setRequestHeader('Authorization', 'Bearer ' + token);
                        }

                    }
                }).on( 'responsive-display', function ( e, datatable, row, showHide, update ) {
                                    if (showHide) {
                                       // {% include "SgDatatablesBundle:Datatable:editable.html.twig" %}
                                    }
                                });;
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
