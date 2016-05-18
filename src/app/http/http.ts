import {Headers} from '@angular/http';

let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NjM2NTYyMjUsInVzZXJuYW1lIjoiYXJ4aXMiLCJpYXQiOiIxNDYzNTY5ODI2In0.lm7XEZiv_fPcH4ipPpU43gwlfKvUCTL9Di80vQFEiiQyDmVF2pncrczgt3zuawwfXp3UcUSs0jZKZvc30HUvCZQRJVqqU5dNYEaRbnRjqQHqiMl9eknCt29dxPk3twmAidF20twHWzhJAy2OsYSrrNU97pxYw2T2uDGnoKrjvaCyXnmM8Hi2QIwVetWxdIRIMZFPhfP3zTfD-b-XZDtuGD1jT0GCtKKpOmSGnG4EWmL-r2dhXaYzes-_BlBIsQi4pPL6y4XFXH091VpEULMHBvDYwc-SmfiluvwMBpo0fKzHoh_oQgG1XYZUDEAkU2cvdf0-e4vBUqs5QG8uXD0Meqxh-SgE0W42FlJ2kobQiWqvuQHE3jZnv-7nF_RjZcEJKvMJNW9mzzwGhbsiZiWNufw3MxOAWPQTQyR0PlNFCU5sn9itvMCN2FaOC441rysE_RYoWp-5_U0iUbYgOkGHm8jouUQ9ovtLR8I4ZF-F0fAArUhMDHM1PKa0dn3IPNJgcwgJgtiK_s78V_HZ2n_fBe51NklaJrxObFr6ee_R3s3GhgRZ3KEY3j0e_oan8X4GBFkgwX587T-JtY0XUHeBFARD-BYKMcSZjw-81O-Vi-DEd8EPoI7NtjZqom1xl754K4fHby-b2Lybv_gXqaeikWJpNBtlkJcKNH8WvVV_qyM'
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