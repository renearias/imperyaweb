/*
 * Providers provided by Angular
 */
"use strict";
require('jquery');
require('tether');
require('bootstrap');
require('widgster');
require('jquery-touchswipe/jquery.touchSwipe');
require('jquery-slimscroll/jquery.slimscroll');
require('pace');
require('./bundles/fosjsrouting/js/router');
require('./js/fos_js_routes');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var ENV_PROVIDERS = [];
if ('production' === process.env.ENV) {
    core_1.enableProdMode();
}
else {
    ENV_PROVIDERS.push(browser_1.ELEMENT_PROBE_PROVIDERS);
}
var app_1 = require('./app');
var config_1 = require('./app/core/config');
document.addEventListener('DOMContentLoaded', function main() {
    browser_1.bootstrap(app_1.App, [
        config_1.ConfigService
    ].concat(ENV_PROVIDERS, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
        //provide(LocationStrategy, { useClass: HashLocationStrategy })
        core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })
    ]))
        .catch(function (err) { return console.error(err); });
});
//# sourceMappingURL=main.js.map