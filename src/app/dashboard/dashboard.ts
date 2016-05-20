import {Component, OnInit} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {tokenNotExpired} from 'angular2-jwt';
import {CanActivate} from '@angular/router-deprecated';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  directives: [Widget]
})

@CanActivate(() => tokenNotExpired())
 
export class Dashboard {

	ngOnInit() {
		console.log('Pasando por DASHBOARD.TS')
    }

}
