/* 
 *  Rene Arias
 */
import {Component} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';

import {Producto}  from './producto';

@Component({
  selector: 'producto-form',
  //templateUrl: './producto-form.component.html'
  template: require('./producto-form.component.html'),
  directives: [Widget]
})
export class ProductoFormComponent {
  tipos = ['Bien', 'Servicio'];
  model = new Producto(1, 'SOYA Liquida', 10, this.tipos[0],'24-11-2015');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}