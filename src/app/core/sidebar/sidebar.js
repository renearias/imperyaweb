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
var ng2_slimscroll_1 = require('ng2-slimscroll/ng2-slimscroll');
var config_1 = require('../config');
var Sidebar = (function () {
    function Sidebar(config, el, router, location) {
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
        this.router = router;
        this.location = location;
    }
    Sidebar.prototype.initSidebarScroll = function () {
        var $sidebarContent = this.$el.find('.js-sidebar-content');
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            size: '4px'
        });
    };
    Sidebar.prototype.changeActiveNavigationItem = function (location) {
        var $newActiveLink = this.$el.find('a[href="#' + location.path() + '"]');
        // collapse .collapse only if new and old active links belong to different .collapse
        if (!$newActiveLink.is('.active > .collapse > li > a')) {
            this.$el.find('.active .active').closest('.collapse').collapse('hide');
        }
        this.$el.find('.sidebar-nav .active').removeClass('active');
        $newActiveLink.closest('li').addClass('active')
            .parents('li').addClass('active');
        // uncollapse parent
        $newActiveLink.closest('.collapse').addClass('in')
            .siblings('a[data-toggle=collapse]').removeClass('collapsed');
    };
    Sidebar.prototype.ngAfterViewInit = function () {
        this.changeActiveNavigationItem(this.location);
    };
    Sidebar.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).on('sn:resize', this.initSidebarScroll.bind(this));
        this.initSidebarScroll();
        this.router.parent.subscribe(function () {
            _this.changeActiveNavigationItem(_this.location);
        });
    };
    Sidebar = __decorate([
        core_1.Component({
            selector: '[sidebar]',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                ng2_slimscroll_1.SlimScroll
            ],
            template: require('./sidebar.html')
        }), 
        __metadata('design:paramtypes', [config_1.ConfigService, core_1.ElementRef, router_1.Router, router_1.Location])
    ], Sidebar);
    return Sidebar;
}());
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.js.map