import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
import {Validators} from '@angular/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlApi, contentHeaders} from '../http/http';
import {ViewEncapsulation, OnInit} from '@angular/core';
import {ConfigService} from './../core/config';

@Component({
	directives: [
		ROUTER_DIRECTIVES,
		FORM_DIRECTIVES
	],
	selector: '[register]',
	host: {
		class: 'register-page app'
	},
	viewProviders: [
		FormBuilder,
		HTTP_PROVIDERS
	],
	styles: [require('../../scss/application.scss'), require('./register.scss')],
	encapsulation: ViewEncapsulation.None,
	template: require('./register.html')
})
export class RegisterPage {

	fb: FormBuilder;
	registerForm: ControlGroup;
	name: Control;
	username: Control;
	charge: Control;
	email: Control;
	password1: Control;
	password2: Control;
	profile_image: string;

	badPasswords: boolean;

	constructor(fb: FormBuilder, public router: Router, public http: Http) {
		this.fb = fb;
		this.buildForm();
		this.passwordValidator();
	}

	buildForm(): void {
		this.name = new Control('', Validators.required);
		this.username = new Control('', Validators.required);
		this.charge = new Control('', Validators.required);
		this.email = new Control('', Validators.required);
		this.password1 = new Control('', Validators.required);
		this.password2 = new Control('', Validators.required);

		this.registerForm = this.fb.group({

			'name': this.name,
			'username': this.username,
			'charge': this.charge,
			'email': this.email,
			'password1': this.password1,
			'password2': this.password2,
			'profile_image': this.profile_image
		});
	}
	passwordValidator() {
		if(this.password1.value === this.password2.value) {
			return 1;
		}

		this.badPasswords = true;
		this.clearPasswords();
		return 0;
	}

	register() {
		if (this.registerForm.valid && this.passwordValidator()) {

			console.log(this.name.value)
			console.log(this.username.value)
			console.log(this.charge.value)
			console.log(this.email.value)
			console.log(this.password1.value)
			console.log(this.password2.value)
			console.log(this.profile_image)

			let name = this.name.value
			let username = this.username.value
			let charge = this.charge.value
			let email = this.email.value
			let password = this.password1.value
			let profile_image = this.profile_image

			let body = JSON.stringify({
				name,
				username,
				charge,
				email,
				password,
				profile_image
			});

			let options = new RequestOptions({
				headers: contentHeaders
			});
			console.log(body)

			this.http.post(urlApi + 'usuarios', body, options)
				.subscribe(
				response => {
					localStorage.setItem('jwt', response.json().token);
					console.log(response.json().token)
					console.log(localStorage.getItem('jwt'))
					//this.router.parent.navigateByUrl('/app');					
				},
				error => {
					console.log(error.text());
					// this.badPasswords = true;
					// this.clearData();
				}
				);

		}
	}

	clearPasswords(): void {
		console.log("probando");
		setTimeout(() => {
			let registerData;
			this.badPasswords = false;
			registerData = this.registerForm.controls;
			registerData.password1.updateValue('');
			registerData.password2.updateValue('');
		}, 2000);

	}

	clearData(): void {
		console.log("probando");
		setTimeout(() => {
			let loginData;

			this.badPasswords = false;
			loginData = this.registerForm.controls;
			loginData.username.updateValue('');
			loginData.password.updateValue('');
		}, 2000);

	}
}
