/* 
 *  Rene Arias
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {snakeToCamel} from '../components/helpers/stringFunctions';
declare var moment: any;
export class Factura {
    public idcliente: number;
    public legal: number;
    public sub_total: string;
    public iva_igv: string;
    public total: string;
    public items: string;
  
  constructor( r?:any, public fechaAlta?: any)
  {
      
      if (typeof(r) != 'undefined')
      {
        var i=0;
        for (i=0; i<Object.keys(r).length;i++)
        {
            this[snakeToCamel(Object.keys(r)[i])] = r[Object.keys(r)[i]];
        }
      }
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

