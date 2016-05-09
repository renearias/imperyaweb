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
var chat_message_1 = require('./chat-message/chat-message');
var pipe_1 = require('./../pipes/pipe');
var chat_service_1 = require('./chat-service');
var ChatSidebar = (function () {
    function ChatSidebar(el) {
        this.newMessage = '';
        this.chatMessageOpened = false;
        this.conversations = new chat_service_1.ChatService();
        this.$el = jQuery(el.nativeElement);
        this.activeConversation = this.conversations.todayConversations[0];
    }
    ChatSidebar.prototype.openConversation = function (conversation) {
        this.activeConversation = conversation;
        this.chatMessageOpened = true;
    };
    ;
    ChatSidebar.prototype.deactivateLink = function (e) {
        jQuery(e.currentTarget).removeClass('active').find('.label').remove();
    };
    ;
    ChatSidebar.prototype.initChatSidebarScroll = function () {
        var $sidebarContent = jQuery('.chat-sidebar-contacts', this.$el);
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            width: '',
            size: '4px'
        });
    };
    ChatSidebar.prototype.ngOnInit = function () {
        var $chatContainer = jQuery('app').addClass('chat-sidebar-container');
        jQuery(document).on('swipeLeft', '.content-wrap', function () {
            if ($chatContainer.is('.nav-collapsed')) {
                $chatContainer.addClass('chat-sidebar-opened');
            }
        })
            .on('swipeRight', function () {
            if ($chatContainer.is('.nav-collapsed.chat-sidebar-opened')) {
                $chatContainer.removeClass('chat-sidebar-opened')
                    .addClass('nav-busy').one(Util.TRANSITION_END, function () {
                    jQuery('app').removeClass('nav-busy');
                }).emulateTransitionEnd(300);
            }
        });
        jQuery(window).on('sn:resize', this.initChatSidebarScroll.bind(this));
        this.initChatSidebarScroll();
    };
    ChatSidebar = __decorate([
        core_1.Component({
            selector: '[chat-sidebar]',
            directives: [
                chat_message_1.ChatMessage
            ],
            pipes: [pipe_1.SearchPipe],
            template: require('./chat-sidebar.html')
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChatSidebar);
    return ChatSidebar;
}());
exports.ChatSidebar = ChatSidebar;
//# sourceMappingURL=chat-sidebar.js.map