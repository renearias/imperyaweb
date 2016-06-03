/* 
 *  Abner Saavedra
 */
import {dateTimeToApiDateTime} from '../components/helpers/dateTimeFunctions';
import {FormasPagos} from '../models/formas-pagos'
import {Factura} from '../facturas/factura'
import {Cliente} from '../clients/cliente'
import {Entity} from '../models/entity';
import {EntityInterface} from '../models/entity-interface';
declare var moment: any;

export class Ingreso extends Entity implements EntityInterface {
    
    public id: number;
    //public factura: Factura;
    public fecha: any;
    public facturas: Array<Factura>;
    public formaPago: number;
    public cliente: Cliente;
    public collectedBy: any;
    public modifiedBy: any;
    public monto: number;
    public descripcion: string;
    public referencia: string;
   
    constructor( r?:any ) {
      super(r); 
      this.fecha = moment().format('YYYY-MM-DDThh:mm');
      //this.cliente = r.cliente.id;
      //this.id_cliente = this.cliente.id;
      //this.id_formapago = this.forma_pago.id;
      //if (typeof (r.cliente.id) != 'undefined'){
        //  r.cliente.id = this.cliente.id;   
      //};
    }
    
    public prepareToSend()
  {
      let ingresoPrepared: Ingreso = new Ingreso(this);
      ingresoPrepared.fecha=dateTimeToApiDateTime(this.fecha);
      delete this['id'];
      delete this['collectedBy'];
      delete this['modifiedBy'];
      return ingresoPrepared;
  }
}

