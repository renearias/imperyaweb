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

    code: Control;
    id_type_person: Object;
    id_types_person: Object[] = [
        { name: "Natural", value: 1},
        { name: "Jurídica", value: 2}
    ];
    name: Control;
    id_type: Object;
    id_types: Object[] = [
        { name: "Cédula", value: 1},
        { name: "Pasaporte", value: 2}
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
    taxpayer: Object; //Clase contribuyente
    taxpayers: Object[] = [
        { name: "Especial"},
        { name: "Normal"},
        { name: "Otro"}
    ];
    //taxpayer: Control;  - no enviar por los momentos
    notes: Control; //no requerido -No enviar por los momentos

    constructor(fb: FormBuilder, public router: Router, public http: Http) {
        this.fb = fb;
        this.buildForm();
    }
        
    buildForm(): void {
        this.code = new Control('', Validators.required);
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
        this.notes = new Control('');

        this.clientForm = this.fb.group({

            'name': this.name,
            'id_type_person': this.id_type_person,
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
            'taxpayer': this.taxpayer,
            'notes': this.notes
        });
    }


    addClient() {          

        if(this.clientForm.valid) {
            // Atributos para enviar a la api
            let codigo = this.code.value
            let identificacion = this.id.value
            let nombre =  this.name.value
            let direccion = this.address.value
            let nombrecomercial = this.comercial_name.value
            let telefonos = this.phone.value
            let ciudad = this.city.value
            let fax = this.fax.value
            let pais = this.country.value
            let contacto = this.contact.value
            let registroempresarial = this.business_registration.value
            let email = this.email.value
            let actividadeconomica = this.economic_activity.value
            let clasecontribuyente = this.taxpayer
            let notas = this.notes.value
            let cliente = 1
            let proveedor = 0
            let vendedor = 0
            let empleado = 0
            let transportista = 0
            let recaudador = 0
            let tipoidentificacionid = this.id_type
            let tipopersonaid = this.id_type_person

            // console.log(codigo)
            // console.log(identificacion)
            // console.log(nombre)
            // console.log(direccion)
            // console.log(nombrecomercial)
            // console.log(telefonos)
            // console.log(ciudad)
            // console.log(fax)
            // console.log(pais)
            // console.log(contacto)
            // console.log(registroempresarial)
            // console.log(email)
            // console.log(actividadeconomica)
            // console.log(clasecontribuyente)
            // console.log(notas)
            // console.log(cliente)
            // console.log(proveedor)
            // console.log(vendedor)
            // console.log(empleado)
            // console.log(transportista)
            // console.log(recaudador)
            // console.log(tipoidentificacionid)
            // console.log(tipopersonaid)

            let body = JSON.stringify({ 

                codigo,
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
                clasecontribuyente,
                notas,
                cliente,
                proveedor,
                vendedor,
                empleado,
                transportista,
                recaudador,
                tipoidentificacionid,
                tipopersonaid
            });

            console.log(body)
            
            let options = new RequestOptions({
                headers: contentHeadersWithToken
            });
                

            this.http.post(urlApi + 'api/contactos', body, options)
            .subscribe(
                response => {
                    console.log(response)
                    if(response.status===201) {
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
        }
    }

    clearData(): void {
        let clientData;

        clientData = this.clientForm.controls;

        clientData.codigo.updateValue('');
        clientData.identificacion.updateValue('');
        clientData.nombre.updateValue('');
        clientData.direccion.updateValue('');
        clientData.nombrecomercial.updateValue('');
        clientData.telefonos.updateValue('');
        clientData.ciudad.updateValue('');
        clientData.fax.updateValue('');
        clientData.contacto.updateValue('');
        clientData.registroempresarial.updateValue('');
        clientData.actividadeconomica.updateValue('');
        clientData.notas.updateValue('');
    }
}  

