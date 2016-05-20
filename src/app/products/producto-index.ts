import {Component,ViewEncapsulation, OnInit} from '@angular/core';
import {Http} from '@angular/http';
//import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
//import {TodoItem} from '../../models';
import {Widget} from '../core/widget/widget';
//import {DataTableDirectives} from 'angular2-datatable/datatable';

import {columnAction} from '../components/tables-dynamic/columnAction';
import {ConfigService} from '../core/config';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-bs/js/dataTables.bootstrap.js';

declare var jQuery: any;
declare var Datatable: any;

@Component({
	selector: 'producto-index',
        encapsulation: ViewEncapsulation.None,
	template: require('./producto-index.html'),
	directives: [Widget],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ProductosIndexPage {
    urlApi:string;
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
        var oTable =jQuery('#angularDataTableTest').dataTable(
                {
                    //"order": [[ 0, "asc" ]],
                    "language":require("../components/tables-dynamic/translations/es-ES.json"),
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                    "processing": true,
                    "serverSide": true,
                    "columns": [
                            { "data": "id"},
                            { "data": "descripcionCorta" },
                            { "data": "stock" },
                            columnAction
                        ],
                    "ajax": {
                        "url": this.urlApi+"api/productos",
                        "type": "GET",
                        'beforeSend': function (request) {
                            request.setRequestHeader("Accept", "application/json");
                            var token=localStorage.getItem('id_token');
                            request.setRequestHeader("Authorization", "Bearer "+token);
                            
                        }

                    }
                });
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
