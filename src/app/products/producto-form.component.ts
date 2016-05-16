/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';

import {Producto}  from './producto';
declare var jQuery: any;

@Component({
  selector: 'producto-form',
  //templateUrl: './producto-form.component.html'
  encapsulation: ViewEncapsulation.None,
  template: require('./producto-form.component.html'),
  directives: [Widget],
  styles: [require('../forms-elements/forms-elements.scss')]
})
export class ProductoFormComponent {
  tipos: Array<string> = ['Bien', 'Servicio', 'Otro'];
  model: Producto= new Producto(1, 'SOYA Liquida', 10, this.tipos[0],'24-11-2015');
  submitted: boolean= false;
  ngOnInit(): void {
   
    jQuery('.select2').select2();
   
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  
}