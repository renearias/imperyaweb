/* 
 *  Rene Arias
 */

export class Producto {
  constructor(
    public id: number,
    public descripcion:	string,
    public stock: number,
    public tipo: string,
    public fechaAlta: any,
    public referencia?: string,
    public impuesto?: number,
    public descripcionCorta?:string,
    public stockMinimo?: number,
    public avisoMinimo?: string,
    public datosProducto?: string,
    public unidadesCaja?: number,
    public precioTicket?: string,
    public modificarTicket?: string,
    public observaciones?: string,
    public precioCompra?: number,
    public precioAlmacen?: number,
    public precioTienda?: number,
    public precioPvp?: number,
    public precioIva?: number,
    public codigobarras?: string,
    public imagen?: string,
    public borrado?: string,
    public codubicacion?: number,
    public codproveedor1?: number,
    public codfamilia?:	number
  ) {  }
}

