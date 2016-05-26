import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Widget} from '../core/widget/widget';
import {Validators} from '@angular/common';
import {AuthHttp} from 'angular2-jwt';
import {urlApi} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';

import {NKDatetime} from 'ng2-datetime/ng2-datetime';

import {IngresosIndexPage} from './ingreso-index';
import {IngresoFormComponent} from './ingreso-form.component';
//import {IngresoFormComponent} from './ingreso-form.component';
//import {IngresoDetailComponent} from './ingreso-detail.component';


@Routes([
  { path: '/', component: IngresosIndexPage },
  { path: '/new', component: IngresoFormComponent }
  //{ path: '/:id', component: ProductoDetailComponent }
])


@Component({
    selector: 'ingresos',
    directives: [Widget, ROUTER_DIRECTIVES, FORM_DIRECTIVES, NKDatetime, IngresosIndexPage],
    
    templateUrl: 'app/ingresos/ingresos.html', 
    //providers: [HTTP_BINDINGS],
    host: {
    class: 'ingresos-page app'
    },
    viewProviders: [ FormBuilder ],
})
export class IngresosPage {

    // Mostrar Pagos - Datos

    payments_array: any;


    // Editar Pagos - Datos

    editData = 
    {
        id: '',
        fecha: '',
        cliente_id: '',
        monto: '',
        descripcion: '',
        referencia: '',
        forma_pago_id: ''
    };

    id: number; // Id del pago a eliminar o editar

    clients_array: any;
    formas_pago: Object[] = [
        { name: 'Efectivo', value: 1 },
        { name: 'Banco', value: 2}
    ];

    // Editar Pagos - Validación de Formulario 

    fb: FormBuilder;    

    editarIngresoForm: ControlGroup;

    ep_fecha: Control;
    ep_cliente_id: Control;
    ep_monto: Control;
    ep_descripcion: Control;
    ep_referencia: Control;
    ep_forma_pago_id: Control;

    // Crear Pagos - Validación de Formulario

    // Aquí también se debe agregar el fb, clients_array y formas_pago en caso
    // de pasar a otra vista

    nuevoIngresoForm: ControlGroup;

    np_fecha: Control;
    np_cliente_id: Control;
    np_monto: Control;
    np_descripcion: Control;
    np_referencia: Control;
    np_forma_pago_id: Control;

    //Ocultar o mostrar vistas
    listaPagoBox: boolean = false;
    editarPagoBox: boolean = true;
    crearPagoBox: boolean = true;
    crearPagoBtn: boolean = false;
    goBackBtn: boolean = true;


    constructor(fb: FormBuilder, public router: Router, public authHttp: AuthHttp) {

        // Mostrar Pagos - Constructor
        //this.getPaymentsFromApi();

        // Editar Pagos - Contructor
        this.getClientsFromApi();        
        
        // Editar Pagos/Crear Pagos - Validación de Formulario
        this.fb = fb;
        this.buildForm();
    }

    // Mostrar Pagos - Request 
    getPaymentsFromApi(): void {

        let moment = require('moment');
        
        this.authHttp.get(urlApi + 'api/ingresos')
            .subscribe(
            response => {
                console.log(response.json()); 
                
                this.payments_array = response.json();
                
                console.log('Listado de pagos');
                this.payments_array.forEach(function(payment){
                    payment.fecha = moment(payment.fecha).format('DD-MM-YYYY hh:mm a');
                })
            },
            error => {
                console.log(error);
            });
    }

    // Editar Pagos - 1ra Parte -> Obteniendo los datos existentes
    goToEditPayment(id: number) {

        this.listaPagoBox = true;
        this.editarPagoBox = false;
        this.goBackBtn = false;

        let old_data;
        console.log('Datos existentes del pago id#: ' + id);

        //Revisamos que pago corresponde al id seleccionado
        this.payments_array.forEach(function(payment) {
            if (payment.id == id) {
                old_data = payment //Lo asinamos a nuestra variable
            }
        });

        // console.log(old_data.id)
        // console.log(old_data.fecha)
        // console.log(old_data.cliente.id)
        // console.log(old_data.descripcion)
        // console.log(old_data.referencia)
        // console.log(old_data.forma_pago.id)

        // Asignamos old_data a nuestro form

        this.editData = {
            id: old_data.id,
            fecha: old_data.fecha,
            cliente_id: old_data.cliente.id,
            monto: old_data.monto,
            descripcion: old_data.descripcion,
            referencia: old_data.referencia,
            forma_pago_id: old_data.forma_pago.id
        };

        let moment = require('moment');
        this.editData.fecha = moment(this.editData.fecha).format('YYYY-MM-DDThh:mm');

        // console.log('editData')
        // console.log(this.editData.id)
        // console.log(this.editData.fecha)
        // console.log(this.editData.cliente_id)
        // console.log(this.editData.descripcion)
        // console.log(this.editData.referencia)
        // console.log(this.editData.forma_pago_id)
    }

    getClientsFromApi(): void {
        this.authHttp.get(urlApi + 'api/clientes')
            .subscribe(
            response => {
                this.clients_array = response.json();
            },
            error => {
                console.log(error);
            }
        );
    }

    editPayment(id: number) {
        console.log('Editar Pago id#: ' + id);

        // Atributos para enviar a la api
        let moment = require('moment');

        //Convirtiendo fecha a JSON
        let day = moment(this.editData.fecha).format('DD')
        let month = moment(this.editData.fecha).format('MM')
        let year = moment(this.editData.fecha).format('YYYY')
        let hour = moment(this.editData.fecha).format('hh')
        let minute = moment(this.editData.fecha).format('mm')

        let fecha = {
            "year": year,
            "month": month,
            "day": day,
            "hour": hour,
            "minute": minute
        }

        // console.log(day)
        // console.log(month)
        // console.log(year)
        // console.log(hour)
        // console.log(minute)

        let cliente = this.editData.cliente_id;
        let monto = this.editData.monto;
        let descripcion = this.editData.descripcion;
        let referencia = this.editData.referencia;
        let formapago = this.editData.forma_pago_id;

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


        // this.authHttp.patch(urlApi + 'api/ingresos/' + id, body)
        //     .subscribe(
        //     response => {
        //         console.log(response);
        //         // if (response.status === 201) {
        //         //     alert('Creado Exitosamente')
        //         //     //Cambiar alert mas adelante
        //         // }
        //         // this.clearData();
        //     },
        //     error => {
        //         console.log(error);
        //         // this.clearData();
        //     }
        //     );
        // }
    }

    // Editar Pagos/Crear Pagos - Validación de Formulario
    buildForm(): void {

        //Editar Ingreso
        this.ep_fecha = new Control('', Validators.required);
        this.ep_cliente_id = new Control('', Validators.required);
        this.ep_monto = new Control('', Validators.required);
        this.ep_descripcion = new Control('', Validators.required);
        this.ep_referencia = new Control('', Validators.required);
        this.ep_forma_pago_id = new Control('', Validators.required);

        this.editarIngresoForm = this.fb.group({

            'ep_fecha': this.ep_fecha,
            'ep_cliente': this.ep_cliente_id,
            'ep_monto': this.ep_monto,
            'ep_descripcion': this.ep_descripcion,
            'ep_referencia': this.ep_referencia,
            'ep_forma_pago': this.ep_forma_pago_id
        });

        // Registrar Ingreso
        this.np_fecha = new Control('', Validators.required);
        this.np_cliente_id = new Control('', Validators.required);
        this.np_monto = new Control('', Validators.required);
        this.np_descripcion = new Control('', Validators.required);
        this.np_referencia = new Control('', Validators.required);
        this.np_forma_pago_id = new Control('', Validators.required);

        this.nuevoIngresoForm = this.fb.group({

            'np_fecha': this.np_fecha,
            'np_cliente': this.np_cliente_id,
            'np_monto': this.np_monto,
            'np_descripcion': this.np_descripcion,
            'np_referencia': this.np_referencia,
            'np_forma_pago': this.np_forma_pago_id
        });

    }
  
    newPayment() {
      
      console.log('Antes de la validación');
        //if (this.nuevoIngresoForm.valid) {
        
        console.log('Entró en el if');
            let moment = require('moment')

            //Convirtiendo fecha a JSON
            let day = moment(this.np_fecha.value).format('DD')
            let month = moment(this.np_fecha.value).format('MM')
            let year = moment(this.np_fecha.value).format('YYYY')
            let hour = moment(this.np_fecha.value).format('hh')
            let minute = moment(this.np_fecha.value).format('mm')

            //Datos para enviar a la API
            let fecha = {
                "year": year,
                "month": month,
                "day": day,
                "hour": hour,
                "minute": minute
            }
            let cliente = this.np_cliente_id.value;
            let monto = this.np_monto.value;
            let descripcion = this.np_descripcion.value;
            let referencia = this.np_referencia.value;
            let formapago = this.np_forma_pago_id.value;

            //Probando en la consola
            console.log(fecha);
            console.log(cliente);
            console.log(monto);
            console.log(descripcion);
            console.log(referencia);
            console.log(formapago);

            //Creando el JSON con los atributos a enviar a la API
            let body = JSON.stringify({
                            fecha,
                            cliente,
                            monto,
                            descripcion,
                            referencia,
                            formapago
                        });

            console.log(body);
             
             this.authHttp.post(urlApi + 'api/ingresos', body)
                   .subscribe(
                    response => {
                       console.log(response);
                         if (response.status === 201) {
                             alert('Creado Exitosamente');
                                 //Cambiar alert mas adelante
                                 }
                         //this.clearData();
                     },
                     error => {
                         console.log(error);
                         //this.clearData();
                     }
                     );
       //}
    }
    
    deletePayment(id: number) {
        console.log('Eliminar Pago id#: ' + id);

        // this.authHttp.delete(urlApi + 'api/ingresos/' + id, body)
        //     .subscribe(
        //     response => {
        //         console.log(response);
        //         // if (response.status === 201) {
        //         //     alert('Eliminado Exitosamente')
        //         //     //Cambiar alert mas adelante
        //         // }
        //         // this.clearData();
        //     },
        //     error => {
        //         console.log(error);
        //         // this.clearData();
        //     }
        //     );
        // }
    }

    goToCreatePayment(){
        this.listaPagoBox = true;
        this.editarPagoBox = true;
        this.crearPagoBox = false;
        this.crearPagoBtn = true;
        this.goBackBtn = false;
    }

    goBack(){
        this.listaPagoBox = false;
        this.editarPagoBox = true;
        this.crearPagoBox = true;
        this.crearPagoBtn = false;
        this.goBackBtn = true;
    }

    //Limpiando el formulario
    // clearData(): void {
    // let ingresoData;
    // ingresoData = this.ingresosForm.controls;

    // ingresoData.fecha.updateValue('');
    // ingresoData.cliente.updateValue('');
    // ingresoData.monto.updateValue('');
    // ingresoData.descripcion.updateValue('');
    // ingresoData.referencia.updateValue('');
    // ingresoData.formadepago.updateValue('');

    //}

}


/*
NOTA: 

¿que falta?:

1. Modificar el JSON de fecha para que envíe la fecha correctamente
2. Colocar ventanas para confirmar acciones
3. Colocar formato en las tablas
*/
