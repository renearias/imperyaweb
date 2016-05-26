/* 
 *  Abner Saavedra
 */

export class Ingreso {
  constructor(
    public id: number,
    public cliente: string,
    public fecha: any,
    public monto: number,
    public descripcion: string,
    public referencia?: string,
    public formapago?: string
  ) {  }
}

