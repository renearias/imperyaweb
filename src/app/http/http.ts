import {Headers} from '@angular/http';

let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjM2MjY5NDMsInVzZXJuYW1lIjoiYXJ4aXMiLCJpYXQiOiIxNDYzNTQwNTQzIn0.WI2IRyO__I5Kys4BEU3npHXkiclgt8M51wmaeEM-_OeWnOb1n8zca84BQohkQZ_NCOdtX7tSKpvSdV4FnW7JNyLNlMGkE7uGS2ir6hvM7x1iI-uJb9axXVwaAZRoVUyLLrFh1b1Em-7cH6gTf7_3NQAoE8TQCz3QcMZ3B1rzmWn_S_NmA8LEwsAtdaRFEn_HY3ag0Z8xc7n-4iIGFsM75AOHtn_lS8XMBSms373hRaAb9llRfRuBZOkcaBeP-D6ahlCmPr3DbmiRThzU28AYAMW6mKYcP42m7OidBcBMb8gv00GPOpIzm17J5gklrouDyImPBzuE3mWtErTmDDZECdt0BBvs1Bf6ABla0zE7QYItS1fPtt2DT7O42-cPR5riD0FwXWkj1uKZ2rt_KSqBC3uC3ML4kz2TZwct6kYZm28yuOgy_hABdO2EEZFJBXE2D3ffR1VJxVLs-1dIO6CS3dZ95GfDU6uPZdLW-4prOPFctkXroNp33830v_lkECvg504_tvKcx-GUkAwBGgk4L13602oJBuQlrxEi_pHx-_PXihaRYRY-cp2yr-Ky0PK0wH-eQ7zO8QKDyQWZ2RFHgVxAZTpZwnov-n_8GZ2ZriM742dzfPbtn4eZwcCsqrrS38MxW_rU_efoYV7MosClQzEI537DDNvMOn2ilvSmBcc'
// let token = localStorage.getItem('jwt');

export const urlApi = 'http://imperya.arxis.la/'
// export const urlClientesApi = 'http://imperya.arxis.la/doc#post--api-contactos'
export const urlIngresosApi = 'http://imperya.arxis.la/doc#post--api-ingresos'


export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Accept', 'application/json');

export const contentHeadersWithToken = new Headers();
contentHeadersWithToken.append('Authorization', 'Bearer '+token);
contentHeadersWithToken.append('Content-Type', 'application/json');