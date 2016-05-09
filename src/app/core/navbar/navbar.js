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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var router_1 = require('angular2/router');
var config_1 = require('../config');
var notifications_1 = require('../notifications/notifications');
var Navbar = (function () {
    function Navbar(el, config) {
        this.toggleSidebarEvent = new core_1.EventEmitter();
        this.toggleChatEvent = new core_1.EventEmitter();
        this.logoutRoute = Routing.generate('fos_user_security_logout');
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
    }
    Navbar.prototype.toggleSidebar = function (state) {
        this.toggleSidebarEvent.emit(state);
    };
    Navbar.prototype.toggleChat = function () {
        this.toggleChatEvent.emit(null);
    };
    Navbar.prototype.ngOnInit = function () {
        // demo-only code. remove in production
        setTimeout(function () {
            var $chatNotification = jQuery('#chat-notification');
            $chatNotification.removeClass('hide').addClass('animated fadeIn')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $chatNotification.removeClass('animated fadeIn');
                setTimeout(function () {
                    $chatNotification.addClass('animated fadeOut')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd' +
                        ' oanimationend animationend', function () {
                        $chatNotification.addClass('hide');
                    });
                }, 8000);
            });
            $chatNotification.siblings('#toggle-chat')
                .append('<i class="chat-notification-sing animated bounceIn"></i>');
        }, 4000);
        this.$el.find('.input-group-addon + .form-control').on('blur focus', function (e) {
            jQuery(this).parents('.input-group')[e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
        });
    };
    Navbar = __decorate([
        core_1.Component({
            selector: '[navbar]',
            events: ['toggleSidebarEvent', 'toggleChatEvent'],
            directives: [notifications_1.Notifications, ng2_bootstrap_1.TOOLTIP_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            template: require('./navbar.html')
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, config_1.ConfigService])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.js.map