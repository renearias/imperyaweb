/*
 * Abner Saavedra
 */
 
 import {Cliente} from '../clients/cliente'
 import {FacturaItemsType} from '../models/order-items'
 
 export class orders(){
     
     public cliente: Cliente;
     public id_cliente: string;
     public items: Array<FacturaItemsType>;
     public legal: number;
     public sub_total: string;
     public iva_igv: string;
     public total: string;
     public legal: number;
     
     constructor(){
         
         this.id_cliente = this.cliente.id;
     }
 }



