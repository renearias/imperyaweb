/*
 * Abner Saavedra
 */
 import {Tipoidentificacion} from '../models/tipo-identificacion';
 import {TipoPersona} from '../models/tipo-persona';
 import {Entity} from '../models/entity';
 import {EntityInterface} from '../models/entity-interface';
 
 export class Cliente extends Entity implements EntityInterface {
     
     public tipoidentificacionid: Tipoidentificacion;
     public tipopersonaid: TipoPersona;
     public id: number|any;
     public codigo: string;
     public identificacion: string;
     public nombre: string;
     public direccion: string;
     public nombrecomercial: string;
     public telefonos: string;
     public ciudad: string;
     public fax: string;
     public pais: string;
     public contacto: string;
     public registroempresarial: string;
     public email: string;
     
     constructor( r?:any)
  {
      
      super(r);

  }
  public prepareToSend(): Cliente
  {
      let clientePrepared: Cliente = new Cliente(this);
      delete clientePrepared['id'];
      delete clientePrepared['atributos'];
      return clientePrepared;
  }
 }