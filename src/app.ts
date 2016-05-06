import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Core} from './app/core/core';
import {ErrorPage} from './app/error/error';
import {LoginPage} from './app/login/login';
declare var jQuery: any;

@Component({
  selector: 'body',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/app/...', component: Core, name: 'App', useAsDefault: true },
  { path: '/error', component: ErrorPage, name: 'ErrorPage' },
  { path: '/login', component: LoginPage, name: 'LoginPage' },
  { path: '/', redirectTo: ['App'] },
  { path: '/**', redirectTo: ['ErrorPage'] }
])
export class App {
}
