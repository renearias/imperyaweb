"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var sidebar_1 = require('./sidebar/sidebar');
var navbar_1 = require('./navbar/navbar');
var chat_sidebar_1 = require('./chat-sidebar/chat-sidebar');
var core_2 = require('angular2/core');
var another_1 = require('./../another/another');
var dashboard_1 = require('./../dashboard/dashboard');
var products_1 = require('./../products/products');
var clients_1 = require('./../clients/clients');
var config_1 = require('./config');
var Core = (function () {
    function Core(config, el, router) {
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.chatOpened = false;
        this.router = router;
    }
    Core.prototype.toggleSidebarListener = function (state) {
        var toggleNavigation = state === 'static'
            ? this.toggleNavigationState
            : this.toggleNavigationCollapseState;
        toggleNavigation.apply(this);
        localStorage.setItem('nav-static', this.config.state['nav-static']);
    };
    Core.prototype.toggleChatListener = function () {
        jQuery(this.el.nativeElement).find('.chat-notification-sing').remove();
        this.chatOpened = !this.chatOpened;
        setTimeout(function () {
            // demo: add class & badge to indicate incoming messages from contact
            // .js-notification-added ensures notification added only once
            jQuery('.chat-sidebar-user-group:first-of-type ' +
                '.list-group-item:first-child:not(.js-notification-added)')
                .addClass('active js-notification-added')
                .find('.fa-circle')
                .after('<span class="label label-pill label-danger ' +
                'pull-right animated bounceInDown">3</span>');
        }, 1000);
    };
    Core.prototype.toggleNavigationState = function () {
        this.config.state['nav-static'] = !this.config.state['nav-static'];
    };
    Core.prototype.expandNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app').removeClass('nav-collapsed');
        this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
            .siblings('[data-toggle=collapse]').removeClass('collapsed');
    };
    Core.prototype.collapseNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app').addClass('nav-collapsed');
        this.$sidebar.find('.collapse.in').collapse('hide')
            .siblings('[data-toggle=collapse]').addClass('collapsed');
    };
    /**
     * Check and set navigation collapse according to screen size and navigation state
     */
    Core.prototype.checkNavigationState = function () {
        var _this = this;
        if (this.isNavigationStatic()) {
            if (this.configFn.isScreen('sm')
                || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
                this.collapseNavigation();
            }
        }
        else {
            if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
                setTimeout(function () {
                    _this.collapseNavigation();
                }, this.config.settings.navCollapseTimeout);
            }
            else {
                this.collapseNavigation();
            }
        }
    };
    Core.prototype.isNavigationStatic = function () {
        return this.config.state['nav-static'] === true;
    };
    Core.prototype.toggleNavigationCollapseState = function () {
        if (jQuery('app').is('.nav-collapsed')) {
            this.expandNavigation();
        }
        else {
            this.collapseNavigation();
        }
    };
    Core.prototype._sidebarMouseEnter = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.expandNavigation();
        }
    };
    Core.prototype._sidebarMouseLeave = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.collapseNavigation();
        }
    };
    Core.prototype.enableSwipeCollapsing = function () {
        var d = this;
        jQuery('.content-wrap').swipe({
            swipeLeft: function () {
                // this method only makes sense for small screens + ipad
                if (d.configFn.isScreen('lg')) {
                    return;
                }
                if (!jQuery('app').is('.nav-collapsed')) {
                    d.collapseNavigation();
                }
            },
            swipeRight: function () {
                // this method only makes sense for small screens + ipad
                if (d.configFn.isScreen('lg')) {
                    return;
                }
                // check if navigation is collapsing. exiting if true
                if (jQuery('app').is('.nav-busy')) {
                    return;
                }
                if (jQuery('app').is('.nav-collapsed')) {
                    d.expandNavigation();
                }
            },
            threshold: this.configFn.isScreen('xs') ? 100 : 200
        });
    };
    Core.prototype.collapseNavIfSmallScreen = function () {
        if (this.configFn.isScreen('xs')
            || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
            this.collapseNavigation();
        }
    };
    Core.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('nav-static') === 'true') {
            this.config.state['nav-static'] = true;
        }
        var $el = jQuery(this.el.nativeElement);
        this.$sidebar = $el.find('[sidebar]');
        $el.find('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
        this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
        this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));
        this.checkNavigationState();
        this.$sidebar.on('click', function () {
            if (jQuery('app').is('.nav-collapsed')) {
                _this.expandNavigation();
            }
        });
        this.router.parent.subscribe(function () {
            _this.collapseNavIfSmallScreen();
            window.scrollTo(0, 0);
        });
        if ('ontouchstart' in window) {
            this.enableSwipeCollapsing();
        }
        this.$sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            var $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
            jQuery($triggerLink.data('parent'))
                .find('.collapse.in').not(jQuery(this)).collapse('hide');
        })
            .on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').addClass('open');
        }).on('hide.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').removeClass('open');
        });
    };
    Core = __decorate([
        core_1.Component({
            selector: 'app',
            host: {
                '[class.nav-static]': 'config.state["nav-static"]',
                '[class.chat-sidebar-opened]': 'chatOpened',
                '[class.app]': 'true',
                id: 'app'
            },
            providers: [common_1.FORM_PROVIDERS],
            directives: [sidebar_1.Sidebar, navbar_1.Navbar, chat_sidebar_1.ChatSidebar, router_1.ROUTER_DIRECTIVES],
            styles: [require('../../scss/application.scss')],
            encapsulation: core_2.ViewEncapsulation.None,
            template: require('./core.html')
        }),
        router_1.RouteConfig([
            { path: '/dashboard', component: dashboard_1.Dashboard, name: 'Dashboard', useAsDefault: true },
            { path: '/another-page', component: another_1.AnotherPage, name: 'AnotherPage' },
            { path: '/products', component: products_1.ProductsPage, name: 'ProductsPage' },
            { path: '/clients', component: clients_1.ClientsPage, name: 'ClientsPage' },
        ]), 
        __metadata('design:paramtypes', [config_1.ConfigService, core_1.ElementRef, router_1.Router])
    ], Core);
    return Core;
}());
exports.Core = Core;
//# sourceMappingURL=core.js.map