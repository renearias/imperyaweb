import {Component, ViewEncapsulation} from '@angular/core';
import {Widget} from '../../core/widget/widget';
import {TablesBackgrid} from './tables-backgrid/tables-backgrid';
import {DataTableDirectives} from 'angular2-datatable/datatable';
declare var jQuery: any;


@Component({
  selector: '[tables-dynamic]',
  template: require('./tables-dynamic.html'),
  encapsulation: ViewEncapsulation.None,
  directives: [Widget, TablesBackgrid, DataTableDirectives],
  styles: [require('./tables-dynamic.scss')]
})
export class TablesDynamic {
  data: any[] = People;

  ngOnInit(): void {
    let searchInput = jQuery('#table-search-input, #search-countries');
    searchInput
      .focus((e) => {
      jQuery(e.target).closest('.input-group').addClass('focus');
    })
      .focusout((e) => {
      jQuery(e.target).closest('.input-group').removeClass('focus');
    });
  }
}
