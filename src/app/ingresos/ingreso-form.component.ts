/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm, FormBuilder, Control, ControlGroup, Validators}    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {AuthHttp} from 'angular2-jwt';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {urlApi} from '../http/http';
//import {Producto}  from './producto';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'ingreso-form',
  //templateUrl: './producto-form.component.html'
  encapsulation: ViewEncapsulation.None,
  template: require('./ingreso-form.component.html'),
  directives: [Widget, NKDatetime],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class IngresoFormComponent {
  
  submitted: boolean = false;
  clients_array: Array<any> = [];
  formas_pago: Object[] = [
        { name: 'Efectivo', value: 1 },
        { name: 'Banco', value: 2}
    ];
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
    
    constructor(private fb: FormBuilder, public router: Router, public authHttp: AuthHttp) {

        this.getClientsFromApi();
        this.buildForm();

    }

  /*ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }*/
  // Editar Pagos/Crear Pagos - Validación de Formulario
    buildForm(): void {

        // Registrar Ingreso
        this.np_fecha = new Control(moment().format('YYYY-MM-DDThh:mm'), Validators.required);
        this.np_cliente_id = new Control('', Validators.required);
        this.np_monto = new Control(0, Validators.required);
        this.np_descripcion = new Control('', Validators.required);
        this.np_referencia = new Control('hola', Validators.required);
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
  
  onSubmit() { 
                console.log("fue submit");
                this.submitted = true; 
             }
  // TODO: Remove this when we're done
  newPayment() {
        console.log('aqui va');
        //if (this.nuevoIngresoForm.valid) {
            console.log('es valido');
            //Convirtiendo fecha a JSON
            let day = parseInt(moment(this.np_fecha.value).format('DD'));
            let month = parseInt(moment(this.np_fecha.value).format('MM'));
            let year = parseInt(moment(this.np_fecha.value).format('YYYY'));
            let hour = parseInt(moment(this.np_fecha.value).format('hh'));
            let minute = parseInt(moment(this.np_fecha.value).format('mm'));

            //Datos para enviar a la API
            let fecha = {
                    "date":{
                            "year": year,
                            "month": month,
                            "day": day},
                     "time":{
                             "hour": hour,
                             "minute": minute
                     }
            }
            let cliente = this.np_cliente_id.value;
            let monto = this.np_monto.value;
            let descripcion = this.np_descripcion.value;
            let referencia = this.np_referencia.value;
            let formaPago = this.np_forma_pago_id.value;

            //Probando en la consola
            console.log(fecha);
            console.log(cliente);
            console.log(monto);
            console.log(descripcion);
            console.log(referencia);
            console.log(formaPago);

            //Creando el JSON con los atributos a enviar a la API
            let body = JSON.stringify({
                            fecha,
                            cliente,
                            monto,
                            descripcion,
                            referencia,
                            formaPago
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
                        // this.clearData();
                     },
                     error => {
                         console.log(error);
                        // this.clearData();
                     }
                     );
      /* }
       else
       {
           console.log('es invalido');
           console.log(this.nuevoIngresoForm.errors);
       }*/
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
}