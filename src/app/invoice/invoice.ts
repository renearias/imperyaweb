import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {TodoItem, InvoiceItem} from '../../models';

@Component({
	selector: 'invoice',
	viewProviders: [FormBuilder],
	template: require('./invoice.html'),
	directives: [FORM_DIRECTIVES]
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

	constructor(fb: FormBuilder) {
		this.fb = fb;
		this.todos = new Array<TodoItem>();
		this.invoice = new Array<InvoiceItem>();
		this.buildForm();
	}

	ngOnInit(): void {
		console.log('ngOnInit() called');
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

			console.log('Subtotal' + this.sub_total)
			console.log('iva' + this.iva)
			console.log('total' + this.total)				
		}
	}

	calculateTotal():void{
		//Sub Total
		var sub_total = 0;
		const IVA = 12;

		this.todos.forEach(function(todo) {
			sub_total += todo.total;
		});
		this.sub_total = sub_total
		console.log('SUBTOTAL ' + this.sub_total)

		//IVA
		this.iva = sub_total * IVA / 100;
		console.log('IVA ' + this.iva)

		//Total
		this.total = this.sub_total + this.iva
		console.log('TOTAL ' + this.total)
	}

	saveInvoice(){
		this.invoice.push(new InvoiceItem(
			this.client_id,
			this.todos,
			this.sub_total,
			this.iva,
			this.total));

		console.log('FACTURA')
		console.log(this.invoice)
	}
}
