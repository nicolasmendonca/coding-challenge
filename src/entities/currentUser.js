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
		this.points = points;
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
}

export default CurrentUser;