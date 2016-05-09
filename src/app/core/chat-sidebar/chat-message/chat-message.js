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
var pipe_1 = require('./../../pipes/pipe');
var ChatMessage = (function () {
    function ChatMessage() {
        this.chatMessageClosed = new core_1.EventEmitter();
        this.newMessage = '';
    }
    ChatMessage.prototype.closeChatArea = function () {
        this.open = false;
        this.chatMessageClosed.emit('');
    };
    ChatMessage.prototype.addMessage = function (message) {
        if (this.newMessage) {
            (this.conversation.messages || (this.conversation.messages = [])).push({
                text: this.newMessage,
                fromMe: true
            });
        }
        this.newMessage = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChatMessage.prototype, "conversation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ChatMessage.prototype, "open", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChatMessage.prototype, "searchMessage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChatMessage.prototype, "chatMessageClosed", void 0);
    ChatMessage = __decorate([
        core_1.Component({
            selector: '[chat-message]',
            pipes: [pipe_1.SearchPipe],
            template: require('./chat-message.html')
        }), 
        __metadata('design:paramtypes', [])
    ], ChatMessage);
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.js.map