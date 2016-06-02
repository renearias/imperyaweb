/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {NgForm}    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Factura}  from './factura';
import {FacturaService}  from './factura.service';
import {EntityFormComponentInterface} from '../components/crud/entity-form.component-interface';
import {EntityFormComponent} from '../components/crud/entity-form.component';
import {InputValidated} from '../components/forms-elements/input-validated';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'factura-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/facturas/factura-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class FacturaFormComponent extends EntityFormComponent implements EntityFormComponentInterface {
  tipos: Array<string> = ['Bien', 'Servicio'];
  //model: any;
  model: Factura;
  editable: boolean= false;
  labelForm: string= 'Crear';
  labelButton: string= 'Crear';
  submitted: boolean= false;
  constructor(router: Router, service: FacturaService, cdr: ChangeDetectorRef) {  
  
      super(router, service, cdr) ;
     
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
  /*routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    let isNew = currTree._root.children[0].children[0].children[0].value.stringifiedUrlSegments;
    if (isNew=='new')
    {
        this.model = new Factura('');
    }else
    {
        //let id = +curr.getParam('id');
      let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
      this.model = new Factura('');
      this.labelForm= 'Editar';
      this.labelButton= 'Actualizar';
      this.service.getFactura(id).subscribe(
      response => { 
        this.model = new Factura(response.json())
        this.editable = true;
        jQuery(".select2[name='tipo']").select2("val", this.model["tipo"]);
      },
      error => {
        console.log(error);
      });
    }
  }
  onSubmit() {
    this.submitted = true; 
    if (this.editable)
    {
      let algo = this.model.sub_total;
      console.log('Descripción de la Factura a editar:' + algo);
      this.service.editarFactura(this.model).subscribe(
      response => { 
        console.log(response);
        console.log('Se envió');
      },
      error => {
        console.log(error);
        console.log(error.json());                
      });
    }else{
   
      this.service.crearFactura(this.model).subscribe(
      response => { 
        console.log(response);
        console.log('se envió');
      },
      error => {
        console.log(error);
        console.log(error.json());
      });       
    }
  }
  // TODO: Remove this when we're done
  get diagnostic(){
      return JSON.stringify(this.model);
  }*/
}
