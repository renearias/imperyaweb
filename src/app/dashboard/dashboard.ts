import {Component} from '@angular/core';
import {Widget} from '../core/widget/widget';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  directives: [Widget]
})
 
export class Dashboard {
}
