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
    this.model=this.service.get(id).subscribe(
                                               response => { 
                                                            this.extractData(response)
                                                        },
                                               error => {
                                                            this.handleError(error);
                                                        });
    //this.selectedId=id;
    
  }
  private extractData(res: Response) {
    let body = res.json();
    this.model= body || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  } 
}

