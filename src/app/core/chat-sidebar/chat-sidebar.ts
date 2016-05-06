import {Component, OnInit, ElementRef} from 'angular2/core';
import {ChatMessage} from './chat-message/chat-message';
import {SearchPipe} from './../pipes/pipe';
import {ChatService} from './chat-service';
declare var jQuery: any;
declare var Util: any;

@Component({
  selector: '[chat-sidebar]',
  directives: [
    ChatMessage
  ],
  pipes: [SearchPipe],

  template: require('./chat-sidebar.html')
})
export class ChatSidebar implements OnInit {
  conversations: ChatService;
  newMessage: string = '';
  activeConversation: any;
  chatMessageOpened: boolean = false;
  $el: any;

  constructor(el: ElementRef) {
    this.conversations = new ChatService();

    this.$el = jQuery(el.nativeElement);
    this.activeConversation = this.conversations.todayConversations[0];
  }

  openConversation(conversation): void {
    this.activeConversation = conversation;
    this.chatMessageOpened = true;
  };

  deactivateLink(e): void {
    jQuery(e.currentTarget).removeClass('active').find('.label').remove();
  };

  initChatSidebarScroll(): void {
    let $sidebarContent = jQuery('.chat-sidebar-contacts', this.$el);
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
  }

  ngOnInit(): void {
    let $chatContainer = jQuery('app').addClass('chat-sidebar-container');
    jQuery(document).on('swipeLeft', '.content-wrap', () => {
        if ($chatContainer.is('.nav-collapsed')) {
          $chatContainer.addClass('chat-sidebar-opened');
        }
      })
      /*
       * Hide chat on swipe right but first check if navigation is collapsed
       * otherwise do nothing
       */
      .on('swipeRight', () => {
        if ($chatContainer.is('.nav-collapsed.chat-sidebar-opened')) {
          $chatContainer.removeClass('chat-sidebar-opened')
            // as there is no way to cancel swipeLeft handlers attached to
            // .content making this hack with temporary class which will be
            // used by snNavigation directive to check whether it is permitted to open navigation
            // on swipeRight
            .addClass('nav-busy').one(Util.TRANSITION_END, () => {
            jQuery('app').removeClass('nav-busy');
          }).emulateTransitionEnd(300);
        }
      });

    jQuery(window).on('sn:resize', this.initChatSidebarScroll.bind(this));
    this.initChatSidebarScroll();
  }

}
