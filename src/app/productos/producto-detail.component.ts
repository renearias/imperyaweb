/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, Injector } from '@angular/core';
import { NgForm }    from '@angular/common';
import {OnActivate, Router, RouteSegment, RouteTree, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Producto}  from './producto';
import {ProductoService}  from './producto.service';
import {ConfigService} from '../core/config';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {EntityDetailComponentInterface} from '../components/crud/entity-detail.component-interface';
import {EntityDetailComponent} from '../components/crud/entity-detail.component';

declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'producto-detail',
  //templateUrl: './producto-form.component.html'
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './app/productos/producto-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES]//,
  
  //styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ProductoDetailComponent extends EntityDetailComponent implements EntityDetailComponentInterface {

   //model:Producto;
   model:any;
   constructor(router: Router, service: ProductoService) {
        super(router,service);
   }

}

