/* 
 *  Rene Arias
 */
import {dateToApiDate} from '../components/helpers/dateTimeFunctions';
import {Entity} from '../models/entity';
import {EntityInterface} from '../models/entity-interface';

declare var moment: any;
export class Producto extends Entity implements EntityInterface{
    public id: number;
    public descripcion:	string;
    public stock: number;
    public tipo: string;
    //public fechaAlta: any;
    public referencia: string;
    public impuesto: number;
    public descripcionCorta:string;
    public stockMinimo: number;
    public avisoMinimo: string;
    public datosProducto: string;
    public unidadesCaja: number;
    public precioTicket: string;
    public modificarTicket: string;
    public observaciones: string;
    public precioCompra: number;
    public precioAlmacen: number;
    public precioTienda: number;
    public precioPvp: number;
    public precioIva: number;
    public codigobarras: string;
    public imagen: string;
    public borrado: string;
    public codubicacion: number;
    public codproveedor1: number;
    public codfamilia:	number;
  
  constructor( r?:any, public fechaAlta?: any)
  {
      super(r);
      this.fechaAlta = moment().format('YYYY-MM-DD');
  }
  public prepareToSend(): Producto
  {
      let productoPrepared: Producto = new Producto(this);
      productoPrepared.fechaAlta=dateToApiDate(this.fechaAlta);
      delete productoPrepared['id'];
      delete productoPrepared['atributos'];
      return productoPrepared;
  }
  
}

