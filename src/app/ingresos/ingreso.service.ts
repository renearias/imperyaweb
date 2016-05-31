import {Injectable} from '@angular/core';
import {Ingreso} from './ingreso';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {IngresoRESTClient} from './ingreso-rest.client';

let INGRESOS = [
];
 let heroesPromise = Promise.resolve(INGRESOS);
@Injectable()
export class IngresoService {
    
  constructor(private authHttp: AuthHttp, private ingresoRESTClient: IngresoRESTClient){
      
  }
  getIngreso(id: number | string) {
      
      return this.ingresoRESTClient.getOneById(id);
                      
    //return ingresoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  // Guardar ingresos
  crearIngreso( ingreso: Ingreso){
      ingreso.prepareToSend();
      return this.ingresoRESTClient.post(ingreso);
  }
  // Obtener todos los ingresos registrados
  getIngresos( sort?: string){
      
      return this.ingresoRESTClient.getAll();
  }
  //Editar un ingreso seleccionado de la lista de ingresos
  editarIngreso(ingreso: Ingreso) {
      let id = ingreso['id'];
      ingreso.prepareToSend();
      return this.ingresoRESTClient.putOneById(id,ingreso);
    
  }
}