import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'SearchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = args;
    if (value) {
      return value.filter(conversation => {
        if (conversation.name) {
          return conversation.name.toLowerCase()
              .indexOf(searchText.toString().toLowerCase()) !== -1
            || conversation.lastMessage.indexOf(searchText) !== -1;
        } else {
          if (conversation.text) {
            return conversation.text.toLowerCase()
                .indexOf(searchText.toString().toLowerCase()) !== -1;
          }
        }
      });
    }
  }
}
