import {Component} from 'angular2/core';
import {Widget} from '../core/widget/widget';

@Component({
	selector: 'clients',
        directives: [Widget],
	template: require('./clients.html')
})
export class ClientsPage {
}
