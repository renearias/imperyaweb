/* 
 *  Abner Saavedra
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {FormasPagos} from '../models/formas-pagos'
import {Cliente} from '../clients/cliente'
import {snakeToCamel} from '../components/helpers/stringFunctions';
import {Entity} from '../models/entity';
import {EntityInterface} from '../models/entity-interface';
declare var moment: any;

export class Ingreso extends Entity implements EntityInterface {
  
    public forma_pago: FormasPagos;
    public id: number;
    public cliente: Cliente;
    public id_cliente: number;
    //public fecha: any;
    public monto: number;
    public descripcion: string;
    public referencia: string;
    public id_formapago: number;
   
    constructor( r?:any, public fecha?: any ) {
        
      super(r); 
      this.fecha = moment().format('YYYY-MM-DDThh:mm');
      this.id_cliente = this.cliente.id;
      this.id_formapago = this.forma_pago.id;
    }
    
    public prepareToSend()
  {
      let ingresoPrepared: Ingreso = new Ingreso(this);
      this.fecha=dateToApiDate(this.fecha);
      delete this['id'];
      delete this['atributos'];
      return ingresoPrepared;
  }
}

