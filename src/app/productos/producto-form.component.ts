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
  model: any;
  submitted: boolean= false;
  constructor(private router: Router, private service: ProductoService) {
        
        
   }
  private refreshValue(value: any) {
    this.model.tipo = value;
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
        this.model=new Producto(1, '', 0, this.tipos[1], moment().format('YYYY-MM-DDThh:mm'));
    }else
    {
        //let id = +curr.getParam('id');
        let id = currTree._root.children[0].children[0].children[0].value.getParam('id');
        this.model = this.service.getProducto(id).subscribe(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });
    }
    
    //this.service.getProducto(id).then(producto => this.model = producto);
    /*this.model=this.service.getProducto(id).subscribe(
                                                        response => { 
                                                            this.model = response.json();
                                                        },
                                                        error => {
                                                                console.log(error);
                                                        });*/
    
    
  }
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic(){
      return JSON.stringify(this.model);
      }
}
