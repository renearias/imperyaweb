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
var config_1 = require('../config');
var notification_load_1 = require('./notification-load');
var Notifications = (function () {
    function Notifications(el, config) {
        this.$el = jQuery(el.nativeElement);
        this.config = config;
    }
    Notifications.prototype.moveNotificationsDropdown = function () {
        jQuery('.sidebar-status .dropdown-toggle').after(jQuery('[notifications]').detach());
    };
    Notifications.prototype.moveBackNotificationsDropdown = function () {
        jQuery('#notifications-dropdown-toggle').after(jQuery('[notifications]').detach());
    };
    Notifications.prototype.ngOnInit = function () {
        this.config.onScreenSize(['sm', 'xs'], this.moveNotificationsDropdown);
        this.config.onScreenSize(['sm', 'xs'], this.moveBackNotificationsDropdown, false);
        if (this.config.isScreen('sm')) {
            this.moveNotificationsDropdown();
        }
        if (this.config.isScreen('xs')) {
            this.moveNotificationsDropdown();
        }
        jQuery('.sidebar-status').on('show.bs.dropdown', function () {
            jQuery('#sidebar').css('z-index', 2);
        }).on('hidden.bs.dropdown', function () {
            jQuery('#sidebar').css('z-index', '');
        });
        jQuery(document).on('change', '[data-toggle="buttons"] > label', function ($event) {
            var $input = jQuery($event.target).find('input');
            $input.trigger('change');
        });
    };
    Notifications = __decorate([
        core_1.Component({
            selector: '[notifications]',
            directives: [notification_load_1.NotificationLoad],
            template: require('./notifications.html')
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, config_1.ConfigService])
    ], Notifications);
    return Notifications;
}());
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.js.map