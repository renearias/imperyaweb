/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormBuilder, Control, ControlGroup, Validators}    from '@angular/common';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from '../http/http';
import {EntityFormComponentInterface} from '../components/crud/entity-form.component-interface';
import {EntityFormComponent} from '../components/crud/entity-form.component';
import { IngresoService }  from './ingreso.service.ts';
import { ClienteService }  from '../clients/cliente.service.ts';
import {Ingreso} from './ingreso'
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'ingreso-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/ingresos/ingreso-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('../components/forms-elements/forms-elements.scss')],
})
export class IngresoFormComponent extends EntityFormComponent implements EntityFormComponentInterface{
  model:Ingreso = new Ingreso('');
  service: IngresoService;
  clients_array: Array<any> = [];
  formas_pago: Object[] = [
        { name: 'Efectivo', value: 1 },
        { name: 'Banco', value: 2}
    ];
    
    constructor(router: Router, authHttp: AuthHttp, service: IngresoService, cdr: ChangeDetectorRef, private clientesService: ClienteService) {
    super(router, service, cdr);
    this.getClientsFromApi();  
    }
    

  ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }
 /*onPreEditLoadActions(){
      jQuery(".select2[name='tipo']").select2("val", this.model["tipo"]);
  }*/
   getClientsFromApi(): void {
        //this.ingresoservice.getIngresos();
       this.clientesService.getAll()
            .subscribe(
            response => {
                this.clients_array = response.json();
            },
            error => {
                console.log(error);
            }
        );
    }
  
}
   
