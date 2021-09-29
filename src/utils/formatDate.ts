/* That looks some rare, but I only format the date in to ISO, 
I use a string to avoid problems related to locale */
export const formatDateToISOString= (date: Date): string =>
	date
		.toLocaleDateString()
		.split('T')[0]
		.split('/')
		.reverse()
		.map((d) => (d.length === 1 ? `0${d}` : d))
		.join('-');
