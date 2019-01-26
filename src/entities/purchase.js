class Purchase {
	constructor( product, qty = 1 ) {
		this.product = product;
		this.qty = qty;
	}

	addOne() {
		return new Purchase(
			this.product,
			this.qty + 1
		)
	}

	get totalPrice() {
		return this.product.cost * this.qty;
	}
}

export default Purchase;
