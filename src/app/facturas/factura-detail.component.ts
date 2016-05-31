/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, Injector } from '@angular/core';
import {NgForm}    from '@angular/common';
import {OnActivate, Router, RouteSegment, RouteTree, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Factura}  from './factura';
import {FacturaService}  from './factura.service';
import {ConfigService} from '../core/config';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'factura-detail',
  templateUrl: './app/facturas/factura-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES]
})
export class FacturaDetailComponent implements OnActivate {
  urlApi: string;
  selectedId:number;
  model:any;
  constructor(config: ConfigService,private router: Router, private service: FacturaService) {
    this.urlApi = config.config.urlApi;        
  }
  
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
    this.model=this.service.getFactura(id).subscribe(
      response => { 
        this.model = response.json();
      },
      error => {
        console.log(error);
      });
    
  }
}

