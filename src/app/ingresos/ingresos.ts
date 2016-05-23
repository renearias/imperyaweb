import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Widget} from '../core/widget/widget';
import {Validators} from '@angular/common';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';

@Component({
    selector: 'ingresos',
    directives: [Widget, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/ingresos/ingresos.html',
    //providers: [HTTP_BINDINGS],
    host: {
    class: 'ingresos-page app'
    },
    viewProviders: [ FormBuilder ],
})
export class IngresosPage {
    fb: FormBuilder;
    ingresosForm: ControlGroup;
    ingresosFormEdit: ControlGroup;
    id: number; // Id del pago a eliminar o editar
    editData = {
            id: '',
            fecha: '',
            cliente: '',
            monto: '',
            descripcion: '',
            referencia: '',
            formapago: { id: '' }
         };
    clients_array: any;
    payments_array: any;
    fecha: Control;
    cliente: Control;
    monto: Control;
    descripcion: Control;
    referencia: Control;
    formapago: Control;
    constructor(fb: FormBuilder, public router: Router, public authHttp: AuthHttp) {
        this.fb = fb;
        this.buildForm();
        this.getClientsFromApi();
    }
      goToEditPayment(id: number) {
        console.log('Datos existentes del pago id#: ' + id);
        console.log(this.payments_array[id]);
        let old_data: any;
        old_data = this.payments_array[id];
        this.editData = {
            id: old_data.id,
            fecha: old_data.fecha,
            cliente: old_data.cliente,
            monto: old_data.monto,
            descripcion: old_data.descripcion,
            referencia: old_data.referencia,
            formapago: { id: old_data.formapago.id }
            };
    }
    editPayment(id: number) {
        console.log('Editar cliente id#: ' + id);
        let new_data: any;
        new_data = this.editData;
        console.log(this.ingresosFormEdit.valid);

        // FALTA VERIFICAR REQUEST Y CORREGIR VALIDACIÓN DE FORMUALARIO
       /* if (this.ingresosFormEdit.valid) {*/
            // Atributos para enviar a la api
            let fecha = this.editData.fecha;
            let cliente = this.editData.cliente;
            let monto = this.editData.monto;
            let descripcion = this.editData.descripcion;
            let referencia = this.editData.referencia;
            let formapago = this.editData.formapago.id;

            console.log(fecha);
            console.log(cliente);
            console.log(monto);
            console.log(descripcion);
            console.log(referencia);
            console.log(formapago);

            let body = JSON.stringify({

                fecha,
                cliente,
                monto,
                descripcion,
                referencia,
                formapago
            });

            console.log(body);



            this.authHttp.patch(urlApi + 'api/ingresos/' + id, body)
                .subscribe(
                response => {
                    console.log(response);
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
    public id_type: Object;
    id_types: Object[] = [
        { name: 'Seleccione', value: 0 },
        { name: 'Efectivo', value: 1 },
        { name: 'Banco', value: 2 }
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
        'id_type': this.id_type
        });
    }
    // Obtener listado de clientes de la api para 
    // visualizarlos en el buscador
    getClientsFromApi(): void {


        this.authHttp.get(urlApi + 'api/contactos')
            .subscribe(
            response => {
                this.clients_array = response.json();
                 for (let client in this.clients_array) {
                }
                console.log('Listado de contactos');
                console.log(response.json());
                console.log(this.clients_array);
            },
            error => {
                 console.log('Se fue por aquí');
                console.log(error);
            }
        );
    }
    //Obtener todos los pagos
    getPaymentsFromApi(): void {


        this.authHttp.get(urlApi + 'api/ingresos')
            .subscribe(
            response => {
                this.payments_array = response.json();
                console.log('Listado de pagos');
                console.log(response.json());
                console.log(this.payments_array);
            },
            error => {
                 console.log('Se fue por aquí');
                console.log(error);
            });
    }
    addIngreso() {
     /*if(this.ingresosForm.valid){*/
            //Datos para enviar a la API
            let fecha = this.fecha.value;
            let cliente = this.cliente;
            let monto = this.monto.value;
            let descripcion = this.descripcion.value;
            let referencia = this.referencia.value;
            let formapago = this.id_type;

            //Probando en la consola
            console.log(this.fecha.value.year);
            console.log(this.cliente.value);
            console.log(this.monto.value);
            console.log(this.descripcion.value);
            console.log(this.referencia.value);
            console.log(this.formapago.value);

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
            console.log(body);
             
            this.authHttp.post(urlApi + 'api/ingresos', body)
                  .subscribe(
                   response => {
                      console.log(response);
                        if (response.status === 201) {
                            alert('Creado Exitosamente');
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
        clearData(): void {
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
