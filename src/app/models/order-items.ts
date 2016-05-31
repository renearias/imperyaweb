/*
 * Abner Saavedra
 */
import {Producto} from '../productos/producto'

export class FacturaItemsType {
    
    public producto: Producto;
    public id_producto: number;
    public cantidad: number;
    public punitario: number;
    public descuento: number;
    
    constructor(){
        
        this.id_producto=this.producto.id;
    }
}
