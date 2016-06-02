/* 
 *  Abner Saavedra
 */
import {Component, ViewEncapsulation, AfterViewInit, Injector } from '@angular/core';
import { NgForm }    from '@angular/common';
import { OnActivate, Router, RouteSegment, RouteTree, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Ingreso}  from './ingreso';
import {IngresoService} from './ingreso.service';
import {ConfigService} from '../core/config';
import {AuthHttp} from 'angular2-jwt';
import {EntityDetailComponentInterface} from '../components/crud/entity-detail.component-interface';
import {EntityDetailComponent} from '../components/crud/entity-detail.component';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'ingreso-detail',
  templateUrl: './app/ingresos/ingreso-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
})
export class IngresoDetailComponent extends EntityDetailComponent implements EntityDetailComponentInterface {
   urlApi: string;
   selectedId: number;
   model: any;
   constructor(config: ConfigService, router: Router, service: IngresoService) {
       
        super(router,service);
        this.urlApi = config.config.urlApi;
       // console.log(url);
        
   }  
    
}


