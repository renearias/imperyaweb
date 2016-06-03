/* 
 *  Abner Saavedra
 */
import {dateTimeToApiDateTime} from '../components/helpers/dateTimeFunctions';
import {FormasPagos} from '../models/formas-pagos'
import {Factura} from '../facturas/factura'
import {Cliente} from '../clients/cliente'
import {snakeToCamel} from '../components/helpers/stringFunctions';
import {Entity} from '../models/entity';
import {EntityInterface} from '../models/entity-interface';
declare var moment: any;

export class Ingreso extends Entity implements EntityInterface {
    
    public id: number;
    //public factura: Factura;
    public facturas: Array<Factura>;
    public forma_pago: FormasPagos;
    //public forma_pago: number;
    //public cliente: Cliente;
    public collectedby: any;
    public modifiedby: any;
    public id_cliente: number;
    public monto: number;
    public descripcion: string;
    public referencia: string;
    public id_formapago: number;
   
    constructor( r?:any, public fecha?: any ) {
        
      super(r); 
      this.fecha = moment().format('YYYY-MM-DDThh:mm');
      //this.id_cliente = this.cliente.id;
      //this.id_formapago = this.forma_pago.id;
    }
    
    public prepareToSend()
  {
      let ingresoPrepared: Ingreso = new Ingreso(this);
      this.fecha=dateTimeToApiDateTime(this.fecha);
      delete this['id'];
      
      return ingresoPrepared;
  }
}

