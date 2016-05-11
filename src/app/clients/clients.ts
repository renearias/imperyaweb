import {Component} from 'angular2/core';
import {Router, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {HTTP_BINDINGS} from 'angular2/http';
import {Widget} from '../core/widget/widget';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {urlClientesApi, contentHeaders} from '../http/http';
import {ViewEncapsulation, OnInit} from 'angular2/core';
import {ConfigService} from './../core/config';

@Component({
	selector: 'clients',
        directives: [Widget,
        ROUTER_DIRECTIVES,
	FORM_DIRECTIVES],
	template: require('./clients.html'),
        providers: [HTTP_BINDINGS],
        
        host: {
    class: 'clients-page app'
  },
  
  viewProviders: [
  	FormBuilder, 
  	HTTP_PROVIDERS
  ],
})
export class ClientsPage {

        fb: FormBuilder;
	clientsForm: ControlGroup;
        identificacion: Control;
        nombre: Control;
        direccion: Control;
        nombrecomercial: Control;
        telefonos: Control;
        ciudad: Control;
        fax: Control;
        contacto: Control;
        registroempresarial: Control;
        email: Control;
        clasecontribuyente: Control;
        
	constructor(fb: FormBuilder, public router: Router, public http: Http) {
		this.fb = fb;
		this.buildForm();
	}

	buildForm(): void {

		this.clientsForm = this.fb.group({

			'identificacion': this.identificacion,
			'nombre': this.nombre,
                        'direccion': this.direccion,
                        'nombrecomercial': this.nombrecomercial,
                        'telefonos': this.telefonos,
                        'ciudad': this.ciudad,
                        'fax': this.fax,
                        'contacto': this.contacto,
                        'registroempresarial': this.registroempresarial,
                        'email': this.email,
                        'clasecontribuyente': this.clasecontribuyente,
                        
		});
	}

	clientes(){
		if (this.clientsForm.valid) {

			console.log(this.identificacion.value)
			console.log(this.nombre.value)
                        console.log(this.direccion.value)
                        console.log(this.nombrecomercial.value)
                        console.log(this.telefonos.value)
                        console.log(this.ciudad.value)
                        console.log(this.fax.value)
                        console.log(this.contacto.value)
                        console.log(this.registroempresarial.value)
                        console.log(this.email.value)
                        console.log(this.clasecontribuyente.value)

			let _identificacion = this.identificacion.value
			let _nombre = this.nombre.value
                        let _direccion = this.direccion.value
                        let _nombrecomercial = this.nombrecomercial.value
                        let _telefonos = this.telefonos.value
                        let _ciudad = this.ciudad.value
                        let _fax = this.fax.value
                        let _contacto = this.contacto.value
                        let _registroempresarial = this.registroempresarial.value
                        let _email = this.email.value
                        let _clasecontribuyente = this.clasecontribuyente.value

			let body = JSON.stringify({ _identificacion, _nombre, _direccion, _nombrecomercial, _telefonos, _ciudad, _fax, _contacto, _registroempresarial, _email, _clasecontribuyente });

			let options = new RequestOptions({
				headers: contentHeaders
			});
			console.log(body)

			this.http.post(urlClientesApi + 'ingresos', body, options)
				.subscribe(
				response => {
					localStorage.setItem('jwt', response.json().token);
					console.log(response.json().token)
					console.log(localStorage.getItem('jwt'))
					this.router.parent.navigateByUrl('/app');					
				}
				)


		}
	}

}
