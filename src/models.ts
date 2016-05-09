//Estructura de un Producto

export class TodoItem {
	constructor(
		public id: string, 
		public description: string, 
		public quantity: string, 
		public price: string, 
		public discount: string, 
		public total: string,
		public completed: boolean) {
	}
}