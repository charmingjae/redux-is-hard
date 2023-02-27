export const getFilteredWriteElement = (dummy, type) => {
	const result = dummy.filter(element => element.type === type);
	if (result.length === 1) return result[0];
	return result;
};

export const getYearData = () => {
	let temp = [];

	for (let i = 2010; i < 2100; i++) {
		temp.push({
			label: String(i),
			value: String(i),
		});
	}

	return temp;
};
