import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from  '../http/http';
import {ClienteRESTClient} from './cliente-rest.client';

let CLIENTES = [

];
let heroesPromise = Promise.resolve(CLIENTES);
@Injectable()
export class ClienteService {
    
  constructor(private authHttp: AuthHttp, private clienteRESTClient: ClienteRESTClient){
      
  }
  getClientes() { return heroesPromise; }
  getCliente(id: number | string) {
      
    return this.clienteRESTClient.getClienteById(id);
                      
    //return clientePromise;
      //.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
  crearCliente(cliente: Cliente) {
      return this.clienteRESTClient.postCliente(cliente.prepareToSend());
  }
  editarCliente(cliente: Cliente) {
      let id = cliente['id'];
      return this.clienteRESTClient.putClienteById(id,cliente.prepareToSend());
  }
}