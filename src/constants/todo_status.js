const STATUS = Object.freeze({
	TODO: 1,
	ONGOING: 2,
	STALLED: 3,
	DONE: 4,
	find: status => {
		switch (status) {
			case 4:
				return this.DONE;
			case 3:
				return this.STALLED;
			case 2:
				return this.ONGOING;
			default:
				return this.TODO;
		}
	}
});

export default STATUS;
