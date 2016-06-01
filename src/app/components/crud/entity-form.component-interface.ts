/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {EntityInterface}  from '../../models/entity-interface';
import {EntityServiceInterface}  from '../../services/entity-service-interface';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';

export interface EntityFormComponentInterface extends OnActivate{
 
  model: EntityInterface;
  editable: boolean;
  labelForm: string;
  labelButton: string;
  submitted: boolean;
  router: Router;
  service: EntityServiceInterface;
  onPreEditAction(id: number | string): any;
  onPreEditLoadActions(): any;
  extractData(res: Response): any;
  handleError (error: Response): any;
  onSubmit(): any;
  onCreateAction(res: Response): any;
  onEditAction(res: Response): any;
}
interface EntityFormComponentInterfaceConstructor {
    new (router: Router): EntityFormComponentInterface;
}

