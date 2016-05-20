import {Headers} from '@angular/http';
import {ConfigService} from '../core/config';
export let token = localStorage.getItem('id_token');
let config = new ConfigService();
export const urlApi = config.config.urlApi;

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Accept', 'application/json');

export const contentHeadersWithToken = new Headers();
contentHeadersWithToken.append('Authorization', 'Bearer '+token);
contentHeadersWithToken.append('Content-Type', 'application/json');