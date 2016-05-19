import {Component,ViewEncapsulation, OnInit} from '@angular/core';
import {Http} from '@angular/http';
//import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
//import {TodoItem} from '../../models';
import {Widget} from '../core/widget/widget';
//import {DataTableDirectives} from 'angular2-datatable/datatable';

import {columnAction} from '../components/tables-dynamic/columnAction';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-bs/js/dataTables.bootstrap.js';

declare var jQuery: any;
declare var Datatable: any;

const People = [
  {
    'id': '1',
    'name': 'Algerd',
    'info': {
      'type': 'JPEG',
      'dimensions': '200x150'
    },
    'description': 'Palo Alto',
    'date': 'June 27, 2013',
    'status': {
      'progress': '29%',
      'type': 'success'
    }
  },
  {
    'id': '2',
    'name': 'Vitaut',
    'info': {
      'type': 'PNG',
      'dimensions': '6433x4522'
    },
    'description': 'Vilnia',
    'date': 'January 1, 1442',
    'status': {
      'progress': '19%',
      'type': 'danger'
    }
  },
  {
    'id': '3',
    'name': 'Honar',
    'info': {
      'type': 'AVI',
      'dimensions': '1440x980'
    },
    'description': 'Berlin',
    'date': 'August 6, 2013',
    'status': {
      'progress': '49%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '4',
    'name': 'Jack',
    'info': {
      'type': 'PNG',
      'dimensions': '12x43'
    },
    'description': 'San Francisco',
    'date': 'August 19, 2013',
    'status': {
      'progress': '69%'
    }
  },
  {
    'id': '5',
    'name': 'Leon',
    'info': {
      'type': 'MP4',
      'dimensions': '800x480'
    },
    'description': 'Brasilia',
    'date': 'October 1, 2013',
    'status': {
      'progress': '9%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '6',
    'name': 'Max',
    'info': {
      'type': 'TXT',
      'dimensions': '-'
    },
    'description': 'Helsinki',
    'date': 'October 29, 2013',
    'status': {
      'progress': '38%',
      'type': 'warning'
    }
  },
  {
    'id': '7',
    'name': 'Pol',
    'info': {
      'type': 'MOV',
      'dimensions': '640x480'
    },
    'description': 'Radashkovichi',
    'date': 'November 11, 2013',
    'status': {
      'progress': '83%',
      'type': 'danger'
    }
  },
  {
    'id': '8',
    'name': 'Chrishna',
    'info': {
      'type': 'DOC',
      'dimensions': '-'
    },
    'description': 'Mumbai',
    'date': 'December 2, 2013',
    'status': {
      'progress': '40%',
      'type': 'info'
    }
  },
  {
    'id': '9',
    'name': 'Leslie',
    'info': {
      'type': 'AVI',
      'dimensions': '4820x2140'
    },
    'description': 'Singapore',
    'date': 'December 6, 2013',
    'status': {
      'progress': '18%',
      'type': 'warning'
    }
  },
  {
    'id': '10',
    'name': 'David',
    'info': {
      'type': 'XML',
      'dimensions': '-'
    },
    'description': 'Portland',
    'date': 'December 13, 2013',
    'status': {
      'progress': '54%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '11',
    'name': 'Andrej',
    'info': {
      'type': 'VOB',
      'dimensions': '6433x4522'
    },
    'description': 'Minsk',
    'date': 'December 14, 2013',
    'status': {
      'progress': '25%'
    }
  },
  {
    'id': '12',
    'name': 'Julia',
    'info': {
      'type': 'JPEG',
      'dimensions': '40x40'
    },
    'description': 'Hrodna',
    'date': 'July 9, 2012',
    'status': {
      'progress': '50%',
      'type': 'warning'
    }
  },
  {
    'id': '13',
    'name': 'Ihnat',
    'info': {
      'type': 'JAVA',
      'dimensions': '-'
    },
    'description': 'Los Angeles',
    'date': 'August 2, 2012',
    'status': {
      'progress': '8%',
      'type': 'success'
    }
  },
  {
    'id': '14',
    'name': 'Abraham',
    'info': {
      'type': 'DOCX',
      'dimensions': '-'
    },
    'description': 'Panama',
    'date': 'September 3, 2012',
    'status': {
      'progress': '80%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '15',
    'name': 'Tomas',
    'info': {
      'type': 'JPEG',
      'dimensions': '1800x1420'
    },
    'description': 'Amsterdam',
    'date': 'November 13, 2012',
    'status': {
      'progress': '10%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '16',
    'name': 'Scott',
    'info': {
      'type': 'PNG',
      'dimensions': '240x460'
    },
    'description': 'Sluck',
    'date': 'December 5, 2012',
    'status': {
      'progress': '93%'
    }
  },
  {
    'id': '17',
    'name': 'Pham',
    'info': {
      'type': 'MAIL',
      'dimensions': '-'
    },
    'description': 'Tokyo',
    'date': 'December 8, 2012',
    'status': {
      'progress': '44%',
      'type': 'danger'
    }
  },
  {
    'id': '18',
    'name': 'Peter',
    'info': {
      'type': 'PNG',
      'dimensions': '8320x6400'
    },
    'description': 'Cape Town',
    'date': 'December 29, 2012',
    'status': {
      'progress': '5%',
      'type': 'bar-gray-light'
    }
  },
  {
    'id': '19',
    'name': 'Uladz',
    'info': {
      'type': 'JPEG',
      'dimensions': '2200x1600'
    },
    'description': 'Mahileu',
    'date': 'December 7, 2013',
    'status': {
      'progress': '0%',
      'type': 'gray-light'
    }
  }
];

@Component({
	selector: 'producto-index',
        encapsulation: ViewEncapsulation.None,
	template: require('./producto-index.html'),
	directives: [Widget],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ProductosIndexPage {
	
    private data: any[] = People;
    
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
                        "url": "http://imperya.arxis.la/app_acceptance.php/api/productos",
                        "type": "GET",
                        'beforeSend': function (request) {
                            request.setRequestHeader("Accept", "application/json");
                            request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjM3MDk4MzAsInVzZXJuYW1lIjoiYXJ4aXMiLCJpYXQiOiIxNDYzNjIzNDMwIn0.X9hWvVb8aPKkk9HOHeCjV7oMd3hW8n8CzYRiuHUAxRn5EXuZ6dsxnmwKGZLPsYaGLJVaAoks7IzB_AtZQ8wz7QKND8YRmCLUnbRAH-DZI-oANlqfs0fZrTqMookUpiYASRNRJg5ci7gpGP-6au2QF_2SDyMtgX2RQCdcwl8J8A8Z4k2K3-rgeu_cKUjUc8U6EKk5k7EOcLpCF8GmCaorco-DDj2t9i2c9LLbBJLfIH-9eE8lwHFs3ciBsU5eU7CZLfD-X5UcHRPPa6CmYIh1Zyzk71r9jnk-7rxnkUaBzqk7LEA9lk29UDUZgJ-2wkO4CvnevR6G7bC5f1S5m4A18IeVPrfHaSGSL4EJ6-3cfQnk2S8EBfKlwc-xwQk2hjCcOi91eTuBKhqMdNoOMO3_uPG9yx1Hd6Yrd7RSt_0NJw79ypf6VnC6QTkbJl1bHzCu_XoZKtQXJy4b-QrOTx-4p0__9PdAN29CwRD7CQ95mAKVGp9tW81wlCXP-3as87cmyTVEvgixmgGTDL38OdLDjoVeQnkelIY0a7Y29_1BV-xstxo4ZdifWMHEwISUi2bcQw1ui0rR68XvuFJgzG9ZGlI6PZhYaz22tKYQxVeesnsPWj2gKXBivNHkZC8ip0UYjE3BTBoxz9Hjm-ZrQqlkediZ3W3ePAw4kyXAYy_9B7g");
                            
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
