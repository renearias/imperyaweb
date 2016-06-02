import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {columnAction} from './columnAction';
import {ConfigService} from '../../core/config';
declare var jQuery: any;
@Directive({ selector: '[dynamic-datatable]'})
export class DynamicDataTable {
    $el: any;
    _urlApi: string = '';
    _routeActions: string = '';
    el: HTMLElement;
    private _columns: any = [];
    private _footerCallback: any = null;
    constructor( el: ElementRef, private router: Router) {
        this.el = el.nativeElement;
        this.$el = jQuery(this.el);
   }
   @Input() set routeActions(routeActions: any){
          this._routeActions = routeActions || this._routeActions;
        }
   @Input() set columns(columns: Array<any>){
       this._columns = columns || this._columns;
        }
   @Input() set footerCallback(footer: any){
          this._footerCallback = footer || this._footerCallback;
        }
   @Input() set urlApi(urlApi: string){
          this._urlApi = urlApi || this._urlApi;
        }
   ngOnInit(): void {
        this._columns.push(columnAction(this._routeActions));
        var routerI = this.router;
        var footerCallback = this._footerCallback;
        /*var footer = this.$el.tfoot({
            
        });*/
        
        // Setup - add a text input to each footer cell
        
        
        var oTable = this.$el.DataTable(
                {
                    //'order': [[ 0, 'asc' ]],
                    'dom': "<'row'<'col-sm-2'l><'col-sm-4 col-xs-12'B><'col-sm-6 col-xs-12'f>>" +
                         "<'row'<'col-sm-12'tr>>" +
                         "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                    'buttons': [
                        'copy', 'excel', 'pdf'
                    ],
                    'language': require('./translations/es-ES.json'),
                    'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'Todos']],
                    'processing': true,
                    'serverSide': true,
                    'responsive': true,
                    'columns': this._columns,
                    //fixedColumns:   true,
                    'footerCallback': this._footerCallback,
                    'ajax': {
                        'url': this._urlApi,
                        'type': 'GET',
                        'beforeSend': function (request){
                            request.setRequestHeader('Accept', 'application/json');
                            var token = localStorage.getItem('id_token');
                            request.setRequestHeader('Authorization', 'Bearer ' + token);
                        }

                    }
                })
                .on('draw.dt', function (e, datatable, row){
                        let tableActions = jQuery('.wraper-actions a');
                        var i;
                        for (i = 0; i < tableActions.length; i++) {
                            tableActions[i].addEventListener('click', function(event){
                                event.preventDefault();
                                var link = this.getAttribute('href');
                                routerI.navigate([link]);
                            });
                        }
                })
                .on( 'responsive-display', function ( e, datatable, row, showHide, update ){
                        
                            if (showHide) {
                                       // {% include "SgDatatablesBundle:Datatable:editable.html.twig" %}
                                    }
                                });
          var oTableHeader=this.$el.find('thead');
          var searchLine=oTableHeader.append('<tr role="row"></tr>');
          var columnas = this._columns;
          this.$el.find('thead th').each( function (i) {
                           
                           
                           //var title = columnas[i]['title'];
                           var title = $(this).text();
                           if (columnas[i]['searchable']!==false)
                           {
                            searchLine.append('<th><input type="text" placeholder="'+title+'" style="width:100%" data-index="'+i+'" /></th>');
                           }else
                           {
                            searchLine.append('<th></th>');
                           }
                        });
          // Filter event handler
          jQuery(oTable.table().container()).on( 'keyup', 'thead input', function () {
                oTable
                    .column( $(this).data('index') )
                    .search( this.value )
                    .draw();
            } );
    }
}
/*            columns: [
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
    */
