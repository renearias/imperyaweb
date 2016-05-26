import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from '@angular/common';
import {Validators} from '@angular/common';
import {TodoItem} from '../../models';
import {InvoiceItem} from '../../models';
import {Widget} from '../core/widget/widget';
import {DataTableDirectives} from 'angular2-datatable/datatable';

import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {urlApi, contentHeadersWithToken} from '../http/http';


@Component({
	selector: 'invoice',
	viewProviders: [
		FormBuilder,
		HTTP_PROVIDERS
	],
	template: require('./invoice.html'),
	directives: [Widget, DataTableDirectives, FORM_DIRECTIVES]
})
export class InvoicePage {
	todos: Array<TodoItem>;
	invoice: Array<InvoiceItem>;

	fb: FormBuilder;
	myForm: ControlGroup;
	item_id: Control;
	item_description: Control;
	item_quantity: Control;
	item_price: Control;
	item_discount: Control;
	item_total: number;

	client_id: string;
	sub_total: number;
	iva: number;
	total: number;

	constructor(fb: FormBuilder, public http: Http) {
		this.fb = fb;
		this.todos = new Array<TodoItem>();
		this.invoice = new Array<InvoiceItem>();
		this.buildForm();
	}

	ngOnInit(): void {
		console.log('ngOnInit() called');
		this.getClients();
	}

	getClients() {
		let options = new RequestOptions({
			headers: contentHeadersWithToken
        });
                this.http.get(urlApi + 'api/clientes', options)
                    .subscribe(
                     response => {
			console.log(response);
			},
			error => {
				console.log(error.text());
			}
		);
	}

	buildForm(): void {
		this.item_id = new Control('', Validators.required);
		this.item_description = new Control('', Validators.required);
		this.item_quantity = new Control('', Validators.required);
		this.item_price = new Control('', Validators.required);
		this.item_discount = new Control('', Validators.required);

		this.myForm = this.fb.group({
			//producto
			'item_id': this.item_id,
			'item_description': this.item_description,
			'item_quantity': this.item_quantity,
			'item_price': this.item_price,
			'item_discount': this.item_discount,
			'item_total': this.item_total,

			//factura

			'client_id': this.client_id,
			'sub_total': this.sub_total,
			'iva': this.iva,
			'total': this.total
		});
	}

	removeTodo(item: TodoItem) {
		this.todos.splice(this.todos.indexOf(item), 1);
		this.calculateTotal();
	}

	onSubmit(): void {
		if (this.myForm.valid) {

			this.todos.push(new TodoItem(
				this.item_id.value,
				this.item_description.value,
				this.item_quantity.value,
				this.item_price.value,
				this.item_discount.value,
				this.item_total,
				false));

			this.calculateTotal();
			this.buildForm();
			console.log('Subtotal' + this.sub_total);
			console.log('iva' + this.iva);
			console.log('total' + this.total);
                    }
	}
	calculateTotal(): void {
		//Sub Total
		var sub_total = 0;
		const IVA = 12;

		this.todos.forEach(function(todo) {
			sub_total += todo.total;
		});
		this.sub_total = sub_total;
		console.log('SUBTOTAL ' + this.sub_total);

		//IVA
		this.iva = sub_total * IVA / 100;
		console.log('IVA ' + this.iva);

		//Total
		this.total = this.sub_total + this.iva;
		console.log('TOTAL ' + this.total);
	}

	saveInvoice() {
		this.invoice.push(new InvoiceItem(
			this.client_id,
			this.todos,
			this.sub_total,
			this.iva,
			this.total));

		console.log('FACTURA');
		console.log(this.invoice);
	}
}
