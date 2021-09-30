/* That looks some rare, but I only format the date in to ISO, 
I use a string to avoid problems related to locale */
export const formatDate = (date: Date): string => {
	const day = date.getDate().toString();
	const month = date.getMonth().toString();
	const year = date.getFullYear().toString();
	const parsedDate = `${year}-${month.length === 1 ? `0${month}` : month}-${
		day.length === 1 ? `0${day}` : day
	}`;

	return parsedDate;
};
