import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ViewEncapsulation, OnInit} from 'angular2/core';
import {ConfigService} from './../core/config';

@Component({
  selector: '[error]',
  host: {
    class: 'error-page app'
  },
  styles: [require('../../scss/application.scss')],
  encapsulation: ViewEncapsulation.None,
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
