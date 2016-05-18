import {Component} from '@angular/core';
import {Cliente} from './cliente'
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from '@angular/http';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {Validators} from '@angular/common';
import {urlApi, contentHeadersWithToken} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';


@Component({
	
    selector: 'clients-page',
    templateUrl: 'app/clients/clients.html',
    directives: [Widget,ROUTER_DIRECTIVES,FORM_DIRECTIVES],
    host: {
        class: 'clientes-page app'
    },
    providers: [HTTP_BINDINGS],
    viewProviders: [FormBuilder,HTTP_PROVIDERS]
})

export class ClientsPage {

    fb: FormBuilder;
    clientForm: ControlGroup;
    name: Control;
    id: Control;
    phone: Control;
    fax: Control;
    city: Control;
    business_registration: Control; //Registro comercial
    email: Control;
    taxpayer: Control; //Clase contribuyente

    constructor(fb: FormBuilder, public router: Router, public http: Http) {
        this.fb = fb;
        this.buildForm();
    }
        
    buildForm(): void {
        this.name = new Control('', Validators.required);
        this.id = new Control('', Validators.required);
        this.phone = new Control('', Validators.required);
        this.address = new Control('', Validators.required);
        this.mobile = new Control('',Validators.required);
        this.ciudad = new Control('', Validators.required);
        this.fax = new Control('', Validators.required);
        this.registroempresarial = new Control('', Validators.required);
        this.clasecontribuyente = new Control ('', Validators.required);
        this.email = new Control ('', Validators.required);

        this.clientesForm = this.fb.group({

            'nombre': this.nombre,
            'nombrecomercial': this.nombrecomercial,
            'identificacion': this.identificacion,
            'direccion': this.direccion,
            'telefono': this.telefono,
            'ciudad': this.ciudad,
            'fax': this.fax,
            'registroempresarial': this.registroempresarial,
            'clasecontribuyente': this.clasecontribuyente,
            'email': this.email
                            
        });
    }
        
    addClient() {
                 
        console.log(this.nombre.value)
        console.log(this.nombrecomercial.value)
        console.log(this.identificacion.value)
        console.log(this.direccion.value)
        console.log(this.telefono.value)
        console.log(this.ciudad.value)
        console.log(this.fax.value)
        console.log(this.registroempresarial.value)
        console.log(this.clasecontribuyente.value)
        console.log(this.email.value)
                                
        let nombre = this.nombre.value
        let nombrecomercial = this.nombrecomercial.value
        let identificacion = this.identificacion.value
        let direccion = this.direccion.value
        let telefono = this.telefono.value
        let ciudad = this.ciudad.value
        let fax = this.fax.value
        let registroempresarial = this.registroempresarial.value
        let clasecontribuyente = this.clasecontribuyente.value
        let email = this.email.value
                                
        let body = JSON.stringify({ nombre, nombrecomercial, identificacion, direccion, telefono, ciudad, fax, registroempresarial, clasecontribuyente, email });

        // let options = new RequestOptions({
        //     headers: contentHeadersWithToken
        // });
            console.log(body)

        // this.http.post(urlApi + 'api/contactos', body, options)
        // .subscribe(
        //     response => {
        //         console.log(response)
        //     }
        // );
    }
}  

