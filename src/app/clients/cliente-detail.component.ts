/* 
 *  Abner Saavedra
 */
import {Component, ViewEncapsulation, AfterViewInit, Injector } from '@angular/core';
import { NgForm }    from '@angular/common';
import {OnActivate, Router, RouteSegment, RouteTree, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Cliente}  from './cliente';
import {ClienteService}  from './cliente.service';
import {ConfigService} from '../core/config';
import {EntityDetailComponentInterface} from '../components/crud/entity-detail.component-interface';
import {EntityDetailComponent} from '../components/crud/entity-detail.component';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'cliente-detail',
  templateUrl: './app/clients/cliente-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES]
})
export class ClienteDetailComponent extends EntityDetailComponent implements EntityDetailComponentInterface {
   urlApi: string;
   selectedId:number;
   model:any;

    constructor(router: Router, service: ClienteService) {
        super(router,service);
   }
  
}

