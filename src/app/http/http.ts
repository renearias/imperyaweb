import {Headers} from '@angular/http';

let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjM3NjQ2OTcsInVzZXJuYW1lIjoiYXJ4aXMiLCJpYXQiOiIxNDYzNjc4Mjk3In0.MjjIuXJ2cAAjEZV2JTLvyVVhjZD9PxH0cLIGCyxgmg3-u9tfpnlzGTIEP4HvHx9ofkaC4x5AaEsZySDruVkvGQkBe_XlMTiWJZY1Do8qshQP2YWKPOXBRJcSryi_EMMohJdc2ZODvLa7xBrgxuHlxCEjtCstzWQYqgJT1uTobZ9QtTWqxB74rU4uJ9vqOSCif8h8DTftznVB23nQHA42XynLjeurLMHBt_LqwAe_wFtfQIOT7LZCRuX-ufa97GiEup5fiRbrtBwt-rrHqPf4WOfkx2No-RM5nFoQb4yMl5NxZbeh-Y4gl3Q8OwCJs93nny1Dw2ZtnmaelRwAXydlVQH45JvuBC-5DCrGi17aXjc6ebWJ3oYxO1zilkd2F7iYkw6UAb_FGOOIsCyP4UVNCWJol8Vz-xZCcvkWl0GW1LjaMsq8jMDD-lBo4CX_orG70u2dDOdkd8WVcWlCUNGOGayEiRBDrl_F45AFVWTgQ9sXRLbaqeanGi5-JkJR_L_HdQwlonKaIooXLGLsnkgTmGKCf3wi-7Tv36nplLW_bEl8tfkc-FQFY0zpD17Nfah-mfbGMxalWVgkKzT8cjcUHfHxDGE0W_Oo_6gvQfGaUejdCA4H2pBd5ReaB5VXfYLclCLnssZ2d7qudZLTPcm9CMyxww3rJ1SSrQG2EmXVdbA'
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