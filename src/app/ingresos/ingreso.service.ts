import {Injectable} from '@angular/core';
import {Ingreso} from './ingreso';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {IngresoRESTClient} from './ingreso-rest.client';

/*let INGRESOS = [
  new Ingreso(11, 'Mr. Nice',3,'Bien',new Date()),
  new Ingreso(12, 'Narco',9,'Servicio',new Date()),
  new Ingreso(13, 'Bombasto',9,'Servicio',new Date()),
  new Ingreso(14, 'Celeritas',92,'Servicio',new Date()),
  new Ingreso(15, 'Magneta',67,'Servicio',new Date()),
  new Ingreso(16, 'RubberMan',12,'Bien',new Date()),
];*/
//let heroesPromise = Promise.resolve(INGRESOS);
@Injectable()
export class IngresoService {
    
  constructor(private authHttp: AuthHttp, private ingresoRESTClient: IngresoRESTClient){
      
  }
  //getIngresos() { return heroesPromise; }
  getIngreso(id: number | string) {
      
    return this.ingresoRESTClient.getIngresoById(id);
                      
    //return ingresoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}