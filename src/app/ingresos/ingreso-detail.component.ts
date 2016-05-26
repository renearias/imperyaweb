/* 
 *  Abner Saavedra
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import { OnActivate, Router, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {Ingreso}  from './ingreso';
import {AuthHttp} from 'angular2-jwt';
import {IngresoService} from './ingreso.service';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'ingreso-detail',
  //templateUrl: './ingreso-form.component.html'
  //encapsulation: ViewEncapsulation.None,
  template: require('./ingreso-detail.component.html'),
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  //styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class IngresoDetailComponent implements OnActivate {
   urlApi: string;
   selectedId: number;
   model: any;
   constructor(private router: Router, private service: IngresoService) {
        
   }
  routerOnActivate(curr: RouteSegment): void {
    let id = +curr.getParam('id');
    //this.service.getHero(id).then(hero => this.hero = hero);
    this.selectedId = id;
    this.service.getIngreso(id)
                 .subscribe(
                            response => {
                                    this.model = response.json();
                                    },
                            error => {
                                console.log(error);
                            });
  }
  tipos: Array<string> = ['Bien', 'Servicio'];
  //model: Ingreso = new Ingreso(2, 'Ingreso X', 0, this.tipos[1], moment().format('YYYY-MM-DDThh:mm'));
  submitted: boolean= false;
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


