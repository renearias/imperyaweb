import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from '@angular/http';
import {Validators} from '@angular/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlIngresosApi, contentHeaders} from '../http/http';
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
    fecha: Control;
    cliente: Control;
    monto: Control;
    descripcion: Control;
    referencia: Control;
    formapago: Control;
        
    constructor(fb: FormBuilder, public router: Router, public http: Http) {
        this.fb = fb;
        this.buildForm();
    }
               
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
        
    ingresos(){

    console.log(this.fecha.value)
    console.log(this.cliente.value)
    console.log(this.monto.value)
    console.log(this.descripcion.value)
    console.log(this.referencia.value)
    console.log(this.formapago.value)

    let _fecha = this.fecha.value
    let _cliente = this.cliente.value
    let _monto = this.monto.value
    let _descripcion = this.descripcion.value
    let _referencia = this.referencia.value
    let _formapago = this.formapago.value

    let body = JSON.stringify({ _fecha, _cliente, _monto, _descripcion, _referencia, _formapago });

    let options = new RequestOptions({
    headers: contentHeaders
    });
    console.log(body)

    this.http.post(urlIngresosApi + 'ingresos', body, options)
    .subscribe(
    response => {
    localStorage.setItem('jwt', response.json().token);
    console.log(response.json().token);
    console.log(localStorage.getItem('jwt'));
    //this.router.navigate('/app/dashboard');
    }
    )

    }

}
