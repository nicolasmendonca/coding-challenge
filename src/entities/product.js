class Product {
	constructor(
		id,
		name,
		cost,
		category,
		imgHD,
		imgSD
	) {
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.category = category;
		this.imgHD = imgHD;
		this.imgSD = imgSD;
	}

	static fromJSON( properties ) {
		return new Product(
			properties._id,
			properties.name,
			properties.cost,
			properties.category,
			properties.img.hdUrl,
			properties.img.url
		)
	}
}

export default Product;