//Estructura de un Producto

export class TodoItem {
	constructor(
		public id: string, 
		public description: string, 
		public quantity: string, 
		public price: string, 
		public discount: string, 
		public total: number,
		public completed: boolean) {

		this.total = +this.quantity * +this.price - +this.quantity * +this.price * +this.discount * 0.01;
	}
}