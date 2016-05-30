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
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'cliente-detail',
  templateUrl: './app/clients/cliente-detail.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES]
})
export class ClienteDetailComponent implements OnActivate {
   urlApi: string;
   selectedId:number;
   model:any;
   constructor(config: ConfigService,private router: Router, private service: ClienteService) {
        this.urlApi = config.config.urlApi;
       /// console.log(url);
        
   }
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    
    let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
    this.model=this.service.getCliente(id).subscribe(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });
    //this.selectedId=id;
    
  }
}

