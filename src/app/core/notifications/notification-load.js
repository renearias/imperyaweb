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
var NotificationLoad = (function () {
    function NotificationLoad(el) {
        this.resetData = null;
        this.$el = jQuery(el.nativeElement);
    }
    NotificationLoad.prototype.ngOnInit = function () {
        var _this = this;
        this.$el.on('click change', function (e) {
            var $this = jQuery(this), $target = jQuery($this.data('ajax-target'));
            if ($target.length > 0) {
                e = jQuery.Event('ajax-load:start', { originalEvent: e });
                $this.trigger(e);
                if (!e.isDefaultPrevented()) {
                    $target.load($this.data('ajax-load'), function () {
                        $this.trigger('ajax-load:end');
                    });
                }
            }
            return false;
        });
        jQuery(window.document).on('click', '[data-toggle^=button]', function (e) {
            e.preventDefault();
            return jQuery(e.target).find('input').data('ajax-trigger') !== 'change';
        });
        if (this.$el.data('loading-text')) {
            this.$el.on('ajax-load:start', function () {
                _this.resetData = _this.$el.html();
                _this.$el.empty().append(_this.$el.data('loading-text')).attr('disabled', true);
            });
            this.$el.on('ajax-load:end', function () {
                _this.$el.empty().append(_this.resetData).attr('disabled', false);
            });
        }
        // demo-only code. remove in production
        jQuery(document).on('ajax-load:end', '#load-notifications-btn', function () {
            setTimeout(function () {
                jQuery('#notifications-list').find('.bg-attention').removeClass('bg-attention');
            }, 10000);
        });
    };
    NotificationLoad = __decorate([
        core_1.Directive({
            selector: '[notification-load]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NotificationLoad);
    return NotificationLoad;
}());
exports.NotificationLoad = NotificationLoad;
//# sourceMappingURL=notification-load.js.map