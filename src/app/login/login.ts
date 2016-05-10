import {Component} from 'angular2/core';
import {Router, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {urlApi, contentHeaders} from '../http/http';

@Component({
  directives: [
    ROUTER_DIRECTIVES,
	FORM_DIRECTIVES
  ],
  selector: '[login]',
  host: {
    class: 'login-page app'
  },
  template: require('./login.html'),
  viewProviders: [
  	FormBuilder, 
  	HTTP_PROVIDERS
  ]
})
export class LoginPage {

	fb: FormBuilder;
	loginForm: ControlGroup;
	username: Control;
	password: Control;

	constructor(fb: FormBuilder, public router: Router, public http: Http) {
		this.fb = fb;
		this.buildForm();
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
					localStorage.setItem('jwt', response.json().token);
					console.log(response.json().token)
					console.log(localStorage.getItem('jwt'))
					this.router.parent.navigateByUrl('/app');					
				},
				error => {
					console.log(error.text());
				}
				);


		}
	}
}