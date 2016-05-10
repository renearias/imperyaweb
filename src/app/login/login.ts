import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ViewEncapsulation, OnInit} from 'angular2/core';
import {ConfigService} from './../core/config';

@Component({
  directives: [
    ROUTER_DIRECTIVES,
  ],
  selector: '[login]',
  host: {
    class: 'login-page app'
  },
  styles: [require('../../scss/application.scss')],
  encapsulation: ViewEncapsulation.None,
  template: require('./login.html')
 
})
export class LoginPage  {
}
