/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { OnActivate, Router, RouteSegment,ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Producto}  from './producto';
import {AuthHttp} from 'angular2-jwt';
import {ConfigService} from '../core/config';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'producto-detail',
  //templateUrl: './producto-form.component.html'
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './app/productos/producto-detail.component.html',
  directives: [Widget, NKDatetime,ROUTER_DIRECTIVES],
  //styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ProductoDetailComponent implements OnActivate {
   urlApi: string;
   selectedId:number;
   model:any;
   constructor(config: ConfigService,private router: Router, private authHttp: AuthHttp) {
        this.urlApi = config.config.urlApi;
        
   }
  routerOnActivate(curr: RouteSegment): void {
    let id = +curr.getParam('id');
    //this.service.getHero(id).then(hero => this.hero = hero);
    this.selectedId=id;
    this.authHttp.get(this.urlApi + 'api/productos/' + id)
                 .subscribe(
                            response => {
                                    this.model=response;
                                    },
                            error => {
                                console.log(error);
                            });
  } 
  tipos: Array<string> = ['Bien', 'Servicio'];
  //model: Producto = new Producto(2, 'Producto X', 0, this.tipos[1], moment().format('YYYY-MM-DDThh:mm'));
  submitted: boolean= false;
  
}