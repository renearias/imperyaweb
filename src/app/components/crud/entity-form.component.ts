/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {EntityInterface} from '../../models/entity-interface';
//import {EntityServiceInterfaceService} from '../../services/entity-service-interface';
import {EntityFormComponentInterface} from './entity-form.component-interface';
declare var jQuery: any;
declare var moment: any;


export class EntityFormComponent implements EntityFormComponentInterface{
  
  model: EntityInterface;
  editable: boolean= false;
  labelForm: string= 'Crear';
  labelButton: string= 'Crear';
  submitted: boolean= false;
  router: Router;
  service: any;
  constructor(router: Router,service: any) {
       this.router= router;
       this.service= service;
   }
  
  ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
   
   }
    onSubmit() {}
}


