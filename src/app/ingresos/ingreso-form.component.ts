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
  
  submitted: boolean= false;
  
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
  
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  newPayment() {

        if (this.nuevoIngresoForm.valid) {

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
                        // this.clearData();
                     },
                     error => {
                         console.log(error);
                        // this.clearData();
                     }
                     );
       }
    }
}