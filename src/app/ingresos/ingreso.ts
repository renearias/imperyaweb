/* 
 *  Abner Saavedra
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {snakeToCamel} from '../components/helpers/stringFunctions';
declare var moment: any;

export class Ingreso {
  
    public id: number;
    public cliente: string;
    public fecha: any;
    public monto: number;
    public descripcion: string;
    public referencia: string;
    public formapago: string;
   
    constructor( r?:any, public fechaAlta?: any ) {
  
  if (typeof(r) != 'undefined')
      {
        var i=0;
        for (i=0; i<Object.keys(r).length;i++)
        {
            this[snakeToCamel(Object.keys(r)[i])] = r[Object.keys(r)[i]];
        }
      }
      this.fechaAlta = moment().format('YYYY-MM-DDThh:mm');
    }
    
    public prepareToSend()
  {
      this.fechaAlta=dateToApiDate(this.fechaAlta);
      delete this['id'];
      delete this['atributos'];
  }
}

