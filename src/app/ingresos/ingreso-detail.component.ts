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
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'ingreso-detail',
  //templateUrl: './ingreso-form.component.html'
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './app/ingresos/ingreso-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  //styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class IngresoDetailComponent implements OnActivate {
   urlApi: string;
   selectedId: number;
   model: any;
   constructor(config: ConfigService, private router: Router, private service: IngresoService) {
       this.urlApi = config.config.urlApi;
       // console.log(url);
        
   }   
    routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    //let id = +curr.getParam('id');
    let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
    //this.service.getIngreso(id).then(ingreso => this.model = ingreso);
    this.model = this.service.getIngreso(id).subscribe(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });
    //this.selectedId=id;
    
  }
    
}


