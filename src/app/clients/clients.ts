import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
// import {clients} from './clients';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
import {Validators} from '@angular/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlApi, contentHeadersWithToken} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';

import {DataTableDirectives} from 'angular2-datatable/datatable';
import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from '@angular/http';


@Component({
	
    directives: [
        Widget,
        ROUTER_DIRECTIVES,
        FORM_DIRECTIVES
    ],
    selector: 'clients',
    templateUrl: 'app/clients/clients.html',
    host: {
        class: 'clients-page app'
    },
    viewProviders: [
        FormBuilder,
        HTTP_PROVIDERS
    ],
    providers: [HTTP_BINDINGS]
})

export class ClientsPage {


    fb: FormBuilder;
    clientForm: ControlGroup;

    name: Control;
    id_type: Object; //No enviar por los momentos
    id_types: Object[] = [
        { name: "N", value: "Especial"},
        { name: "E", value: "RISE" }
    ];
    id: Control;
    address: Control;
    phone: Control;
    fax: Control;
    city: Control;
    country: Control; // no requerido
    comercial_name: Control;
    business_registration: Control; //Registro comercial
    economic_activity: Control; // no requerido
    contact: Control;
    email: Control;
    id_taxpayer: Object; //No enviar por los momentos
    id_taxpayers: Object[] = [
        { name: "N", value: "Especial" },
        { name: "E", value: "RISE" },
        { name: "Otros", value: "Otros" },
    ];
    taxpayer: Control; //Clase contribuyente - no enviar por los momentos
    //notes: Control; //no requerido -No enviar por los momentos
    //person_type: Control; //No enviar por los momentos


    constructor(fb: FormBuilder, public router: Router, public http: Http) {
        this.fb = fb;
        this.buildForm();
    }
        
    buildForm(): void {
        this.name = new Control('', Validators.required);
        this.id = new Control('', Validators.required);
        this.address = new Control('', Validators.required);
        this.phone = new Control('', Validators.required);
        this.fax = new Control('',Validators.required);
        this.city = new Control('', Validators.required);
        this.country = new Control('');
        this.comercial_name = new Control('', Validators.required);
        this.business_registration = new Control('', Validators.required);
        this.economic_activity = new Control('');
        this.contact = new Control('', Validators.required);
        this.email = new Control ('', Validators.required);
        this.taxpayer = new Control('', Validators.required);

        this.clientForm = this.fb.group({

            'name': this.name,
            'id_type': this.id_type,
            'id': this.id,
            'address': this.address,
            'phone': this.phone,
            'fax': this.fax,
            'city': this.city,
            'country': this.country,
            'comercial_name': this.comercial_name,
            'business_registration': this.business_registration,
            'economic_activity': this.economic_activity,
            'contact': this.contact,
            'email': this.email,
            'id_taxpayer': this.id_taxpayer,
            'taxpayer': this.taxpayer
        });
    }


    addClient() {               

        if(this.clientForm.valid) {
            // Atributos para enviar a la api
            let identificacion= this.id.value
            let nombre =  this.name.value
            let direccion = this.address.value
            let nombrecomercial = this.comercial_name.value
            let telefonos = this.phone.value
            let ciudad = this.city.value
            let fax = this.fax.value
            let pais = this.country
            let contacto = this.contact.value
            let registroempresarial = this.business_registration.value
            let email = this.email.value
            let actividadeconomica = this.economic_activity.value
            let clasecontribuyente = this.taxpayer.value

            let body = JSON.stringify({ 

                identificacion,
                nombre,
                direccion,
                nombrecomercial,
                telefonos,
                ciudad,
                fax, 
                contacto,
                registroempresarial,
                email,
                actividadeconomica,
            });

            console.log(body)
            
            // let options = new RequestOptions({
            //     headers: contentHeadersWithToken
            // });
                

            // this.http.post(urlApi + 'api/contactos', body, options)
            // .subscribe(
            //     response => {
            //         console.log(response)
            //     }
            // );
        }
    }
}  

