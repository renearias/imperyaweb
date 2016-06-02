/* 
 *  Abner Saavedra
 */
import {Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Cliente}  from './cliente';
import {ClienteService}  from './cliente.service';
import {EntityFormComponentInterface} from '../components/crud/entity-form.component-interface';
import {EntityFormComponent} from '../components/crud/entity-form.component';
import {InputValidated} from '../components/forms-elements/input-validated';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'cliente-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/clients/cliente-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ClienteFormComponent extends EntityFormComponent implements EntityFormComponentInterface {
  model: Cliente;
  editable: boolean= false;
  labelForm: string= 'Crear';
  labelButton: string= 'Crear';
  submitted: boolean= false;
 constructor(router: Router, service: ClienteService, cdr: ChangeDetectorRef) {
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
  // TODO: Remove this when we're done
  get diagnostic(){
      return JSON.stringify(this.model);
      }
}
