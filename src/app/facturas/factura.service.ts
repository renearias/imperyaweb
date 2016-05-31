import {Injectable} from '@angular/core';
import {Factura} from './factura';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {FacturaRESTClient} from './factura-rest.client';

let FACTURAS = [

];
let heroesPromise = Promise.resolve(FACTURAS);
@Injectable()
export class FacturaService {
    
  constructor(private authHttp: AuthHttp, private facturaRESTClient: FacturaRESTClient){
      
  }
  getFacturas() { return heroesPromise; }
  getFactura(id: number | string) {
      
    return this.facturaRESTClient.getFacturaById(id);
                      
    //return productoPromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crearFactura(factura: Factura) {
      return this.facturaRESTClient.postFactura(factura.prepareToSend());
  }
  editarFactura(factura: Factura) {
      let id = factura['id'];
      return this.facturaRESTClient.putFacturaById(id,factura.prepareToSend());
  }
}