import {Component,ViewEncapsulation, OnInit} from '@angular/core';
import {Http} from '@angular/http';
//import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
//import {TodoItem} from '../../models';
import {Widget} from '../core/widget/widget';
import {DataTableDirectives} from 'angular2-datatable/datatable';
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
	directives: [Widget,DataTableDirectives],
        styles: [require('../components/tables-dynamic/tables-dynamic.scss')]
})
export class ProductosIndexPage {
	
    private data: any[] = People;
    
    ngOnInit(): void {
        
        jQuery('#angularDataTableTest').DataTable(
                {
                    dom:"<'row'<'col-sm-4 col-xs-12'l><'col-sm-4 col-xs-12'><'col-sm-4 col-xs-12'f>>"+
                         "<'row'<'col-sm-12'rt>>"+
                         "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                    language:require("../components/tables-dynamic/translations/es-ES.json"),
                    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                    data: this.data,
                columns: [
                    { data: 'id' },
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
                      
                      }//,
                   /* { data: 'salary' },
                    { data: 'office' }*/
                ]}
        );
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
