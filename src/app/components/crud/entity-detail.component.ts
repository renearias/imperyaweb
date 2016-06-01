/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {EntityInterface} from '../../models/entity-interface';
import {EntityServiceInterface} from '../../services/entity-service-interface';
import {InstanceLoader} from '../instance-loader/instance-loader';
import {EntityDetailComponentInterface} from './entity-detail.component-interface';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';

declare var jQuery: any;
declare var Messenger: any;

export class EntityDetailComponent implements EntityDetailComponentInterface {
   urlApi: string;
   selectedId:number;
   model:any;
   router: Router;
   routeSegment: string;
   service:EntityServiceInterface;
   constructor(router: Router, service: EntityServiceInterface){
        this.router= router;
        this.service= service;
   }
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
    this.routeSegment = currTree._root.children[0].children[0].value.stringifiedUrlSegments;
    this.model=this.service.get(id).subscribe(
                                               response => { 
                                                            this.extractData(response)
                                                        },
                                               error => {
                                                            this.handleError(error);
                                                        });
  }
  onDeleteAction(id: number | string){
       let message = Messenger().post({
                          message: "Eliminando registro...",
                          type: "info"
                        })
       this.service.eliminar(id).subscribe(
                                       response => { 
                                                message.update({
                                                      message: "Registro eliminado correctamente",
                                                      type: "error",
                                                      showCloseButton: true
                                                    })
                                                this.router.navigate(['/app',this.routeSegment])
                                              },
                                        error =>{
                                                  message.update({
                                                      message: "Ocurrió un error al eliminar",
                                                      type: "error",
                                                      showCloseButton: true
                                                    })
                                                  //this.handleError(error);
                                               });
   }
  extractData(res: Response) {
    let body = res.json();
    this.model= body || { };
  }
  handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  } 
}
