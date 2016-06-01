/* 
 *  Rene Arias
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NgForm, ControlGroup, Control}    from '@angular/common';
//import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
//import {Producto}  from './producto';
//import {ProductoService}  from './producto.service';
//import {EntityFormComponentInterface} from '../components/crud/entity-form.component-interface';
//import {EntityFormComponent} from '../components/crud/entity-form.component';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Validators} from '@angular/common';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'parsley-error-list',
  template: require('./input-validated.html'),
  directives: [FORM_DIRECTIVES]
  })
export class InputValidated implements OnInit{
  
  @Input() inputName: any;  
  @Input() inputValue: any;
  @Input() inputType: string ='text';
  @Input() form :NgForm;
  @Output() inputValueChange: EventEmitter<any> = new EventEmitter();
  ngOnInit(){
      this.form.control.addControl(this.inputName,new Control('',Validators.required));
  }
  onChange(newValue) {
    this.inputValue = newValue;
    this.inputValueChange.emit(newValue);
    
  }
  
}