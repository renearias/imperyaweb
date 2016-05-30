/* 
 *  Abner Saavedra
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Cliente}  from './cliente';
import {ClienteService}  from './cliente.service';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'cliente-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/clients/cliente-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ClienteFormComponent implements OnActivate{
  model: Cliente;
  editable: boolean= false;
  labelForm: string= 'Crear';
  labelButton: string= 'Crear';
  submitted: boolean= false;
  constructor(private router: Router, private service: ClienteService) {
        
        
   }
  
  ngAfterViewInit(): void {
    jQuery('.select2').select2();
    jQuery('.select2').on(
        'change',
        (e) => {this.model[e.target.name] = jQuery(e.target).val();
      }
    );
  }
  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree): void {
    
    let isNew = currTree._root.children[0].children[0].children[0].value.stringifiedUrlSegments;
    if (isNew=='new')
    {
        this.model=new Cliente();
    }else
    {
        //let id = +curr.getParam('id');
        let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
        this.model= new Cliente();
        this.labelForm= 'Editar';
        this.labelButton= 'Actualizar';
        this.service.getCliente(id).subscribe(
                                                       response => { 
                                                            this.model= new Cliente(response.json())
                                                            this.editable=true;
                                                            jQuery(".select2[name='tipo']").select2("val", this.model["tipo"]);
                                                            },
                                                        error => {
                                                                console.log(error);
                                                        });
    }
    
    /*this.model=this.service.getCliente(id).subscribe(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });*/
    
    
  }
  onSubmit() {
   this.submitted = true; 
   if (this.editable)
   {
       let algo = this.model.nombre;
       console.log('Descripción del cliente a editar:' + algo);
            this.service.editarCliente(this.model).subscribe(
                                                       response => { 
                                                                console.log(response);
                                                                console.log('se envi2o');
                                                       },
                                                        error => {
                                                                console.log(error);
                                                                console.log(error.json());
                                                                
                                                        });
   }else{
   
        this.service.crearCliente(this.model).subscribe(
                                                       response => { 
                                                                console.log(response);
                                                                console.log('se envi2o');
                                                       },
                                                        error => {
                                                                console.log(error);
                                                                console.log(error.json());
                                                                
                                                        });
       
   }
   
   }
  // TODO: Remove this when we're done
  get diagnostic(){
      return JSON.stringify(this.model);
      }
}
