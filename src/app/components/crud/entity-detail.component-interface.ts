/* 
 *  Rene Arias
 */
import {OnActivate, Router} from '@angular/router';
import {EntityInterface}  from '../../models/entity-interface';
import {EntityServiceInterface}  from '../../services/entity-service-interface';
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';

export interface EntityDetailComponentInterface extends OnActivate{
  model: EntityInterface;
  router: Router;
  routeSegment: string;
  service: EntityServiceInterface;
  extractData(res: Response): any;
  handleError (error: any): any;
  onDeleteAction(id : number | string): any;
}