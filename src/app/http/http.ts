import {Headers} from 'angular2/http';

export const urlApi = 'http://imperya.arxis.la/'
export const urlClientesApi = 'http://imperya.arxis.la/doc#post--api-contactos'
export const urlIngresosApi = 'http://imperya.arxis.la/doc#post--api-ingresos'
let token = localStorage.getItem('jwt');

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Accept', 'application/json');

export const contentHeadersWithToken = new Headers();
contentHeadersWithToken.append('Authorization', 'Bearer '+token);
contentHeadersWithToken.append('Content-Type', 'application/json');