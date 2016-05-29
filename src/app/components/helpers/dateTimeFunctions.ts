/* 
 *  Todos los derechos reservados
 */
declare var moment: any;
export function dateToApiDate(fecha:any){
    
            let day = parseInt(moment(fecha).format('DD'));
            let month = parseInt(moment(fecha).format('MM'));
            let year = parseInt(moment(fecha).format('YYYY'));
           // let hour = parseInt(moment(fecha).format('hh'));
           // let minute = parseInt(moment(fecha).format('mm'));

            //Datos para enviar a la API
            let fechaObj = {
                   
                            'year': year,
                            'month': month,
                            'day': day
            };
       return fechaObj;     
}
export function dateTimeToApiDateTime(fecha:any){
    
            let day = parseInt(moment(fecha).format('DD'));
            let month = parseInt(moment(fecha).format('MM'));
            let year = parseInt(moment(fecha).format('YYYY'));
            let hour = parseInt(moment(fecha).format('hh'));
            let minute = parseInt(moment(fecha).format('mm'));

            //Datos para enviar a la API
            let fechaObj = {
                   'date': {
                            'year': year,
                            'month': month,
                            'day': day},
                    'time': {
                             'hour': hour,
                             'minute': minute
                     }
            };
       return fechaObj;     
}
