/* 
 *  Abner Saavedra
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {FormasPagos} from '../models/formas-pagos'
import {Cliente} from '../clients/cliente'
import {snakeToCamel} from '../components/helpers/stringFunctions';
declare var moment: any;

export class Ingreso {
  
    public forma_pago: FormasPagos;
    public id: number;
    public cliente: Cliente;
    public id_cliente: number;
    //public fecha: any;
    public monto: number;
    public descripcion: string;
    public referencia: string;
    public formapago: string;
   
    constructor( r?:any, public fecha?: any ) {
        
        this.id_cliente = this.cliente.id;
  
  if (typeof(r) != 'undefined')
      {
        var i=0;
        for (i=0; i<Object.keys(r).length;i++)
        {
            this[snakeToCamel(Object.keys(r)[i])] = r[Object.keys(r)[i]];
        }
      }
      this.fecha = moment().format('YYYY-MM-DDThh:mm');
    }
    
    public prepareToSend()
  {
      this.fecha=dateToApiDate(this.fecha);
      delete this['id'];
      delete this['atributos'];
  }
}

