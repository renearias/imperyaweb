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
export class ProductoDetailComponent implements OnActivate {
   urlApi: string;
   selectedId:number;
   model:any;
   constructor(config: ConfigService,private router: Router, private service: ProductoService) {
        this.urlApi = config.config.urlApi;
       /// console.log(url);
        
   }
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    //let id = +curr.getParam('id');
    let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
    //this.service.getProducto(id).then(producto => this.model = producto);
    this.model=this.service.getProducto(id).map(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });
    //this.selectedId=id;
    
  }
}

