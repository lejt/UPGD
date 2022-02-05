var unirest = require("unirest");

export default function getAll() {
	var req = unirest("GET", "https://newegg-data-scraper.p.rapidapi.com/search/RTX");
	
	req.headers({
		"searchquery": "RTX",
		"x-rapidapi-key": "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd",
		"x-rapidapi-host": "newegg-data-scraper.p.rapidapi.com",
		"useQueryString": true
	});
	
	
	req.end(function (res) {
		if (res.error) throw new Error(res.error);
	
		// console.log(res.body);
	  	// return res.body.products.forEach(p=> console.log(p.title));
	});
}