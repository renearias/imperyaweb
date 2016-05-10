import {Headers} from 'angular2/http';

export const urlApi = 'http://imperya.arxis.la/'
let token = localStorage.getItem('jwt');

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Accept', 'application/json');

//export const contentHeadersWithToken = new Headers();
//contentHeaders.append('Authorization', 'Bearer '+token);
//contentHeaders.append('Content-Type', 'application/json');