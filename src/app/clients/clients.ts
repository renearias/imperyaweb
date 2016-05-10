import {Component} from 'angular2/core';
import {Widget} from '../core/widget/widget';

@Component({
	selector: 'clients',
	template: require('./clients.html')
        directives: [Widget]
})
export class ClientsPage {
}
