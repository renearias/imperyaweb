import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: '[error]',
  host: {
    class: 'error-page app'
  },
  template: require('./error.html')
})
export class ErrorPage {
router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  searchResult(): void {
    this.router.navigate(['/App', 'Dashboard']);
  }

}
