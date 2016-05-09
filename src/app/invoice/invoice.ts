import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl} from 'angular2/common';
import {Validators} from 'angular2/common';
import {TodoItem} from '../../models';

@Component({
	selector: 'invoice',
	viewProviders: [FormBuilder],
	template: require('./invoice.html'),
	directives: [FORM_DIRECTIVES]
})
export class InvoicePage {
	
	todos: Array<TodoItem>;

	fb: FormBuilder;
	myForm: ControlGroup;
	item_id: Control;
	item_description: Control;
	item_quantity: Control;
	item_price: Control;
	item_discount: Control;
	item_total: string;

	constructor(fb: FormBuilder) {
		this.fb = fb;
		this.todos = new Array<TodoItem>();
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
			'item_id': this.item_id,
			'item_description': this.item_description,
			'item_quantity': this.item_quantity,
			'item_price': this.item_price,
			'item_discount': this.item_discount,
			'item_total': this.item_total
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

			this.buildForm();
		}
	}

	toggleAll(completed: boolean) {
		this.todos.forEach(function(todo) {
			todo.completed = completed;
		});
	}
}
