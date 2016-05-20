import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Core} from './app/core/core';
import {ErrorPage} from './app/error/error';
import {LoginPage} from './app/login/login';
import {RegisterPage} from './app/register/register';

import {token} from './app/http/http';

declare var jQuery: any;

@Component({
  selector: 'body',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})
@Routes([
  { path: '/app', component: Core },
  { path: '/error', component: ErrorPage,},
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage }
  /*{ path: '/app/...', component: Core, name: 'App' },
  { path: '/error', component: ErrorPage, name: 'ErrorPage' },
  { path: '/login', component: LoginPage, name: 'LoginPage', useAsDefault: true},
  { path: '/', redirectTo: ['LoginPage'] },
  { path: '/**', redirectTo: ['ErrorPage'] }*/
  
])
export class App  implements OnInit {
    
    constructor(private router: Router) {}
    
    ngOnInit() {
       console.log('Pasando por APP.TS')       
    }
}
