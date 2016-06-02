/* 
 *  Rene Arias
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
 import {Entity} from '../models/entity';
 import {EntityInterface} from '../models/entity-interface';
  import {Cliente} from '../clients/cliente'
 import {FacturaItemsType} from '../models/order-items'
declare var moment: any;

export class Factura extends Entity implements EntityInterface{
    
    public cliente: Cliente;
    public id_cliente: number;
    public items: Array<FacturaItemsType>;
    public id: number;
    public legal: number;
    public sub_total: string;
    public iva_igv: string;
    /*public total: string;
    public emitido: any;
    public vencimiento: any;
    public pago: any;
    public estado: string;*/
  
  constructor( r?:any, public fechaAlta?: any)
  {
      
      super(r);
      this.fechaAlta = moment().format('YYYY-MM-DD');
      this.id_cliente = this.cliente.id;
  }
  public prepareToSend(): Factura
  {
      let facturaPrepared: Factura = new Factura(this);
      facturaPrepared.fechaAlta=dateToApiDate(this.fechaAlta);
      delete facturaPrepared['id'];
      delete facturaPrepared['atributos'];
      return facturaPrepared;
  }
  
}

