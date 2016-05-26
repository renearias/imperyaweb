/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Producto}  from './producto';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'producto-form',
  //templateUrl: './producto-form.component.html'
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/productos/producto-form.component.html',
  directives: [Widget, NKDatetime],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ProductoFormComponent {
  tipos: Array<string> = ['Bien', 'Servicio'];
  model: Producto = new Producto(1, '', 0, this.tipos[1], moment().format('YYYY-MM-DDThh:mm'));
  submitted: boolean= false;
  private refreshValue(value: any) {
    this.model.tipo = value;
  }
  ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic(){
      return JSON.stringify(this.model);
      }
}