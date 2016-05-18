import {Component} from '@angular/core';
import {Cliente} from './cliente'
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';

import {Router, RouterLink, ROUTER_DIRECTIVES} from '@angular/router';
import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from '@angular/http';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {Validators} from '@angular/common';
import {urlClientesApi, contentHeaders} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';


@Component({
	
selector: 'clients-page',
templateUrl: 'app/clients/clients.html',
directives: [Widget,
ROUTER_DIRECTIVES,
FORM_DIRECTIVES],
host: {
class: 'clientes-page app'
},
providers: [HTTP_BINDINGS],
viewProviders: [
FormBuilder, 
HTTP_PROVIDERS
]
})
export class ClientsPage {

fb: FormBuilder;
clientesForm: ControlGroup;
nombre: Control;
nombrecomercial: Control;
identificacion: Control;
direccion: Control;
ciudad: Control;
telefono: Control;
fax: Control;
registroempresarial: Control;
email: Control;
clasecontribuyente: Control;

constructor(fb: FormBuilder, public router: Router, public http: Http) {
this.fb = fb;
this.buildForm();
}
    
buildForm(): void {
this.nombre = new Control('', Validators.required);
this.nombrecomercial = new Control('', Validators.required);
this.identificacion = new Control('', Validators.required);
this.direccion = new Control('', Validators.required);
this.telefono = new Control('',Validators.required);
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
        
clientes(){
                 
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
                        
let _nombre = this.nombre.value
let _nombrecomercial = this.nombrecomercial.value
let _identificacion = this.identificacion.value
let _direccion = this.direccion.value
let _telefono = this.telefono.value
let _ciudad = this.ciudad.value
let _fax = this.fax.value
let _registroempresarial = this.registroempresarial.value
let _clasecontribuyente = this.clasecontribuyente.value
let _email = this.email.value
                        
let body = JSON.stringify({ _nombre, _nombrecomercial, _identificacion, _direccion, _telefono, _ciudad, _fax, _registroempresarial, _clasecontribuyente, _email});

let options = new RequestOptions({
headers: contentHeaders
});
console.log(body)

this.http.post(urlClientesApi + 'clientes', body, options)
.subscribe(
response => {
localStorage.setItem('jwt', response.json().token);
console.log(response.json().token)
console.log(localStorage.getItem('jwt'))
this.router.parent.navigateByUrl('/app');					
}
);

}

}
         
    
}

