/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Producto}  from './producto';
import {ProductoService}  from './producto.service';
import {EntityFormComponentInterface} from '../components/crud/entity-form.component-interface';
import {EntityFormComponent} from '../components/crud/entity-form.component';
import {InputValidated} from '../components/forms-elements/input-validated';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'producto-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/productos/producto-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES, InputValidated],
  styles: [require('../components/forms-elements/forms-elements.scss')]  
})
export class ProductoFormComponent extends EntityFormComponent implements EntityFormComponentInterface {
  tipos: Array<string> = ['Bien', 'Servicio'];
  model: Producto= new Producto('');
  service: ProductoService;
  errors: any;
  constructor(router: Router, service: ProductoService, cdr: ChangeDetectorRef) {
    super(router, service, cdr)    
   }
  ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }
  onPreEditLoadActions(){
      jQuery(".select2[name='tipo']").select2("val", this.model["tipo"]);
  }
  get diagnostic(){
      return JSON.stringify(this.model);
      }
}
