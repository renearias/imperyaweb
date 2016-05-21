/* 
 *  Todos los derechos reservados
 */

import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {Http} from '@angular/http';
import {urlApi, contentHeaders} from '../http/http';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //lock = new Auth0Lock('YOUR_AUTH0_CLIENT_ID', 'YOUR_AUTH0_DOMAIN');
  refreshSubscription: any;
  user: Object;
  zoneImpl: NgZone;
  private loggedIn = false;

  constructor(private authHttp: AuthHttp, zone: NgZone, private router: Router,private http: Http) {
    this.zoneImpl = zone;
    this.user = JSON.parse(localStorage.getItem('profile'));
    this.loggedIn = !!localStorage.getItem('id_token');
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    return tokenNotExpired();
  }

 /* public login() {
    // Show the Auth0 Lock widget
    this.lock.show({}, (err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      // If authentication is successful, save the items
      // in local storage
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      this.zoneImpl.run(() => this.user = profile);
    });
  }*/
   public login(_username, _password) {

    let headers = contentHeaders;
    return this.http.post(urlApi+'login_check',JSON.stringify({ _username, _password }),{ headers })
                    .subscribe(
                    response => {
                            var res = response.json();
                            console.log('Iniciando Sesión...');
                            //localStorage.setItem('profile', JSON.stringify(profile));
                            localStorage.setItem('id_token', res.token);
                            //this.zoneImpl.run(() => this.user = profile);
                            this.loggedIn = true;
                            localStorage.setItem('jwt', res.token);
                            console.log('Token guardado exitósamente');
                            this.router.navigate(['app/dashboard']);				
                    });
  }
  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    localStorage.removeItem('jwt');
    this.zoneImpl.run(() => this.user = null);
    this.router.navigate(['login']);
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
