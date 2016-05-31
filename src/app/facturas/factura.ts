/* 
 *  Rene Arias
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
 import {Entity} from '../models/entity';
 import {EntityInterface} from '../models/entity-interface';
declare var moment: any;
export class Factura extends Entity implements EntityInterface{
    public idcliente: number;
    public legal: number;
    public sub_total: string;
    public iva_igv: string;
    public total: string;
    public items: string;
  
  constructor( r?:any, public fechaAlta?: any)
  {
      
      super(r);
      this.fechaAlta = moment().format('YYYY-MM-DD');
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

