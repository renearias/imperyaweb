/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {EntityInterface}  from '../../models/entity-interface';
import {EntityServiceInterface}  from '../../services/entity-service-interface';

export interface EntityFormComponentInterface extends OnActivate{
 
  model: EntityInterface;
  editable: boolean;
  labelForm: string;
  labelButton: string;
  submitted: boolean;
  router: Router;
  service: EntityServiceInterface;
  onSubmit();
}
interface EntityFormComponentInterfaceConstructor {
    new (router: Router): EntityFormComponentInterface;
}

