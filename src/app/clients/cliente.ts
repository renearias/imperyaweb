/*
 * Abner Saavedra
 */
 import {Tipoidentificacion} from '../models/tipo-identificacion'
 import {TipoPersona} from '../models/tipo-persona'
 import {snakeToCamel} from '../components/helpers/stringFunctions';
 
 export class Cliente{
     
     public tipoidentificacionid: Tipoidentificacion;
     public tipopersonaid: TipoPersona;
     public id: number;
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
      
      if (typeof(r) != 'undefined')
      {
        var i=0;
        for (i=0; i<Object.keys(r).length; i++)
        {
            this[snakeToCamel(Object.keys(r)[i])] = r[Object.keys(r)[i]];
        }
      }
  }
  public prepareToSend(): Cliente
  {
      let clientePrepared: Cliente = new Cliente(this);
      delete clientePrepared['id'];
      delete clientePrepared['atributos'];
      return clientePrepared;
  }
 }