/* 
 *  Rene Arias
 */
import {Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgForm }    from '@angular/common';
import {Widget} from '../core/widget/widget';
import {NKDatetime} from 'ng2-datetime/ng2-datetime';
import {OnActivate, Router, RouteTree, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import {Producto}  from './producto';
import {ProductoService}  from './producto.service';
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'producto-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/productos/producto-form.component.html',
  directives: [Widget, NKDatetime, ROUTER_DIRECTIVES],
  styles: [require('../components/forms-elements/forms-elements.scss')]
})
export class ProductoFormComponent implements OnActivate{
  tipos: Array<string> = ['Bien', 'Servicio'];
  //model: any;
  model: Producto;
  editable: boolean= false;
  labelForm: string= 'Crear';
  labelButton: string= 'Crear';
  submitted: boolean= false;
  constructor(private router: Router, private service: ProductoService) {
        
        
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
        this.model=new Producto('');
    }else
    {
        //let id = +curr.getParam('id');
        let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
        this.model=new Producto('');
        this.labelForm= 'Editar';
        this.labelButton= 'Actualizar';
        this.service.getProducto(id).subscribe(
                                                       response => { 
                                                            this.model=new Producto(response.json())
                                                            this.editable=true;
                                                            jQuery(".select2[name='tipo']").select2("val", this.model["tipo"]);
                                                            },
                                                        error => {
                                                                console.log(error);
                                                        });
    }
    
    /*this.model=this.service.getProducto(id).subscribe(
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
       let algo = this.model.descripcion;
       console.log('Descripción del producto a editar:' + algo);
            this.service.editarProducto(this.model).subscribe(
                                                       response => { 
                                                                console.log(response);
                                                                console.log('se envi2o');
                                                       },
                                                        error => {
                                                                console.log(error);
                                                                console.log(error.json());
                                                                
                                                        });
   }else{
   
        this.service.crearProducto(this.model).subscribe(
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
