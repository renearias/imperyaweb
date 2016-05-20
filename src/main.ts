/*
 * Providers provided by Angular
 */

import 'jquery';
import 'tether';
import 'bootstrap';
import 'widgster';
import 'jquery-touchswipe/jquery.touchSwipe';
import 'jquery-slimscroll/jquery.slimscroll';
import 'webpack-raphael';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import 'moment/moment.js';
import 'select2/select2.js';
import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';

import 'pace';

import {provide, enableProdMode} from '@angular/core';
import {NgControl} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';
import {ROUTER_PROVIDERS,} from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

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
    NgControl,
    AUTH_PROVIDERS,
    ...ENV_PROVIDERS,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    //provide(LocationStrategy, { useClass: HashLocationStrategy })
    provide(LocationStrategy, { useClass: PathLocationStrategy })
  ])
  .catch(err => console.error(err));
});
