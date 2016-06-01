import {Component, ViewEncapsulation} from 'angular2/core';
import {MessengerDemo} from './messenger/messenger';
import {Widget} from '../core/widget/widget';

@Component({
  selector: '[ui-components]',
  template: require('./ui-notifications.html'),
  directives: [MessengerDemo, Widget],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./ui-notifications.scss')]
})
export class UiNotifications {
}

