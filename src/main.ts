/*
 * Providers provided by Angular
 */

import 'jquery';
import 'tether';
import 'bootstrap';
import 'widgster';
import 'jquery-touchswipe/jquery.touchSwipe';
import 'jquery-slimscroll/jquery.slimscroll';
import 'pace';

//import './bundles/fosjsrouting/js/router';
//declare var Routing: any;
//import './js/fos_js_routes';
//declare var fos: any;

import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';
import {ROUTER_PROVIDERS,} from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

const ENV_PROVIDERS = [];

if ('production' === process.env.ENV) {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

import {App} from './app';
import {ConfigService} from './app/core/config';

document.addEventListener('DOMContentLoaded', function main(): void {
  bootstrap(App, [
    ConfigService,
    ...ENV_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    //provide(LocationStrategy, { useClass: HashLocationStrategy })
    provide(LocationStrategy, { useClass: PathLocationStrategy })
  ])
  .catch(err => console.error(err));
});
