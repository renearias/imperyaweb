import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from '@angular/http';
import {Validators} from '@angular/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlApi, contentHeadersWithToken} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';

@Component({
    selector: 'ingresos',
    directives: [Widget, ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    templateUrl: 'app/ingresos/ingresos.html',
    providers: [HTTP_BINDINGS],
    
    host: {
    class: 'ingresos-page app'
    },
    
    viewProviders: [ FormBuilder, HTTP_PROVIDERS],
})
export class IngresosPage {
        
    fb: FormBuilder;
    
    ingresosForm: ControlGroup;
    ingresosFormEdit: ControlGroup;
    
    clients_array:any;
    payments_array:any;
    
    fecha: Control;
    cliente: Control;
    monto: Control;
    descripcion: Control;
    referencia: Control;
    formapago: Control;
        
    constructor(fb: FormBuilder, public router: Router, public http: Http) {
        this.fb = fb;
        this.buildForm();
        this.getClientsFromApi();
    }
    
    id: number;// Id del pago a eliminar o editar
    editData={
            
            fecha: "",
            cliente: "", 
            monto: "",
            descripcion: "",
            referencia: "",
            formapago: ""

         }
         
         goToEditPayment(id: number) {
        console.log('Datos existentes del cliente id#: ' + id)
       

        console.log(this.payments_array[id])

        let old_data: Object[]
        old_data = this.payments_array[id]

        this.editData = {
            id: old_data.id,
            fecha: old_data.fecha,
            cliente: old_data.cliente,
            monto: old_data.monto,
            descripcion: old_data.descripcion,
            referencia: old_data.referencia,
            formapago: old_data.formapago,
            
        }
    }
    
    editPayment(id: number){
        console.log('Editar cliente id#: ' + id)

        let new_data: any
        new_data = this.editData
        console.log(this.ingresosFormEdit.valid)

        // FALTA VERIFICAR REQUEST Y CORREGIR VALIDACIÓN DE FORMUALARIO
        
       /* if (this.ingresosFormEdit.valid) {*/
            // Atributos para enviar a la api
            let fecha = this.editData.fecha
            let cliente = this.editData.cliente
            let monto = this.editData.monto
            let descripcion = this.editData.descripcion
            let referencia = this.editData.referencia
            let formapago = this.editData.formapago
            

            console.log(fecha)
            console.log(cliente)
            console.log(monto)
            console.log(descripcion)
            console.log(referencia)
            console.log(formapago)
          

            let body = JSON.stringify({

                fecha,
                cliente,
                monto,
                descripcion,
                referencia,
                formapago
            });

            console.log(body)

            let options = new RequestOptions({
                headers: contentHeadersWithToken
            });


            this.http.patch(urlApi + 'api/ingresos/'+id, body, options)
                .subscribe(
                response => {
                    console.log(response)
                    // if (response.status === 201) {
                    //     alert('Creado Exitosamente')
                    //     //Cambiar alert mas adelante
                    // }
                    this.clearData();
                },
                error => {
                    console.log(error);
                    this.clearData();
                }
                );
        // }
    }
    
    id_type: Object;
    id_types: Object[] = [
        { name: "Seleccione", value: 1 },
        { name: "Debito", value: 2},
        { name: "Crédito", value: 3 },
        { name: "Transferencia", value: 4 }
    ];
               
    buildForm(): void {

        this.fecha = new Control('', Validators.required);
        this.cliente = new Control('', Validators.required);
        this.monto = new Control('', Validators.required);
        this.descripcion = new Control('', Validators.required);
        this.referencia = new Control('', Validators.required);
        this.formapago = new Control('', Validators.required);


        this.ingresosForm = this.fb.group({

        'fecha': this.fecha,
        'cliente': this.cliente,
        'monto': this.monto,
        'descripcion': this.descripcion,
        'referencia': this.referencia,
        'formapago': this.formapago
        });
    }
    
    // Obtener listado de clientes de la api para 
    // visualizarlos en el buscador
    getClientsFromApi(): void {
        let options = new RequestOptions({
            headers: contentHeadersWithToken
        });

        this.http.get(urlApi + 'api/contactos', options)
            .subscribe(
            response => {
                this.clients_array = response.json()
                for(let client in this.clients_array){
                        
                        
                }
                console.log('Listado de contactos')
                console.log(response.json())
                console.log(this.clients_array)
              
            },
            error => {
                 console.log('Se fue por aquí');
                console.log(error);
            }
        );
    }
    
    //Obtener todos los pagos
    getPaymentsFromApi(): void {
        let options = new RequestOptions({
            headers: contentHeadersWithToken
        });

        this.http.get(urlApi + 'api/ingresos', options)
            .subscribe(
            response => {
                this.payments_array = response.json()
                
                console.log('Listado de pagos')
                console.log(response.json())
                console.log(this.payments_array)
              
            },
            error => {
                 console.log('Se fue por aquí');
                console.log(error);
            }
        );
    }
        
    addIngreso(){
     
     /*if(this.ingresosForm.valid){*/
            //Datos para enviar a la API
            let fecha = this.fecha.value
            let cliente = this.cliente.value
            let monto = this.monto.value
            let descripcion = this.descripcion.value
            let referencia = this.referencia.value
            let formapago = this.formapago.value

            //Probando en la consola
            console.log(this.fecha.value)
            console.log(this.cliente.value)
            console.log(this.monto.value)
            console.log(this.descripcion.value)
            console.log(this.referencia.value)
            console.log(this.formapago.value)

            //Creando el JSON con los atributos a enviar a la API
            let body = JSON.stringify({ 
                            
                            fecha, 
                            cliente, 
                            monto, 
                            descripcion, 
                            referencia, 
                            formapago 
                               });
                               
                               
            //Intanciando un request                   
            let options = new RequestOptions({
                headers: contentHeadersWithToken
               }); 
        
            console.log(body)

            this.http.post(urlApi + 'api/ingresos/', body, options)
                  .subscribe(
                   response => {
                      console.log(response)
                        if (response.status === 201) {
                            alert('Creado Exitosamente')
                                //Cambiar alert mas adelante
                                }
                        this.clearData();
                    },
                    error => {
                        console.log(error);
                        this.clearData();
                    }
                    );
               
   /*}*/
    
 }
        //Limpiando el formulario
        clearData(): void{
    
             let ingresoData;
    
             ingresoData = this.ingresosForm.controls;

             ingresoData.fecha.updateValue('');
             ingresoData.cliente.updateValue('');
             ingresoData.monto.updateValue('');
             ingresoData.descripcion.updateValue('');
             ingresoData.referencia.updateValue('');
             ingresoData.formadepago.updateValue('');

        }

}
