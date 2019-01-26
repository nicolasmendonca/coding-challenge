class CurrentUser {
	constructor(
		_id,
		redeemHistory,
		points,
		name,
		createDate
	) {
		this.id = _id;
		this.redeemHistory = redeemHistory;
		this.points = Number(points);
		this.name = name;
		this.createDate = createDate;
	}

	static fromJSON( properties ) {
		return new CurrentUser(
			properties._id,
			properties.redeemHistory,
			properties.points,
			properties.name,
			properties.createDate,
		)
	}

	addPoints( amount ) {
		return new CurrentUser(
			this.id,
			this.redeemHistory,
			this.points + amount,
			this.name,
			this.createDate
		);
	}
}

export default CurrentUser;