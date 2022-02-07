export async function getOne(url) {
	// console.log(url, typeof url)
	const options = {
	  "method": "GET",
	  "headers": {
		'Access-Control-Allow-Origin': "*",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"x-rapidapi-key": "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd",
		"x-rapidapi-host": "newegg-data-scraper.p.rapidapi.com",
	  },
	}
	// await fetch(url, options)
	// .then(response => {
	//   console.log(response);
	// })
	// .catch(err => {
	//   console.error(err);
	// });
  
	const res = await fetch(url, options)
	if (res.ok) return res.json();
	throw new Error('Bad Request');
}