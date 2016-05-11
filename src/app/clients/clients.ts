import {Component} from 'angular2/core';
import {Widget} from '../core/widget/widget';
import {HTTP_BINDINGS} from 'angular2/http';

import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';
import {urlClientesApi, contentHeaders} from '../http/http';
import {ViewEncapsulation, OnInit} from 'angular2/core';
import {ConfigService} from './../core/config';

@Component({
	selector: 'clients',
        directives: [Widget],
	template: require('./clients.html'),
        providers: [HTTP_BINDINGS]
})
export class ClientsPage {
}

class MyComponent { }
