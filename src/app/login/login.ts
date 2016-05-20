import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
import {Validators} from '@angular/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlApi, contentHeaders, token} from '../http/http';
import {ConfigService} from './../core/config';


@Component({
  directives: [
    ROUTER_DIRECTIVES,
	  FORM_DIRECTIVES
  ],
  selector: '[login]',
  host: {
    class: 'login-page app'
  },
  viewProviders: [
  	FormBuilder, 
  	HTTP_PROVIDERS
  ],
  styles: [require('../../scss/application.scss'),require('./login.scss')],
  encapsulation: ViewEncapsulation.None,
  template: require('./login.html')
})

export class LoginPage {

    fb: FormBuilder;
    loginForm: ControlGroup;
    username: Control;
    password: Control;
    badCredentials;

	constructor(fb: FormBuilder, public router: Router, public http: Http) {
		this.fb = fb;
		this.buildForm();
    this.badCredentials = false;
	}

  ngOnInit(): void {

    // if (token) {
    //   console.log('Ya posee un token activo, redirigiendo al dashboard...')
    //   this.router.navigate(['/app/dashboard']);
    // }
  }

        buildForm(): void {
        this.username = new Control('', Validators.required);
        this.password = new Control('', Validators.required);

        this.loginForm = this.fb.group({

          'username': this.username,
          'password': this.password
          });
        }

        login(){
        if (this.loginForm.valid) {

        console.log(this.username.value)
        console.log(this.password.value)

        let _username = this.username.value
        let _password = this.password.value

        let body = JSON.stringify({ _username, _password });

        let options = new RequestOptions({
        headers: contentHeaders
        });
        console.log(body)

			this.http.post(urlApi + 'login', body, options)
				.subscribe(
				response => {
          console.log('Iniciando Sesión...')          
					localStorage.setItem('jwt', response.json().token);
					console.log('Token guardado exitósamente')
          this.router.navigate(['/app/dashboard']);				
				},
				error => {
					console.log(error.text());
					this.badCredentials = true;
					this.clearData();
				}
			);
		}
	}
	clearData(): void {
		setTimeout(() => {
			let loginData;

			this.badCredentials = false;
			loginData = this.loginForm.controls;
			loginData.username.updateValue('');
			loginData.password.updateValue('');
		}, 2000);

	}
}
