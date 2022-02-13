// Data scraper api:
// https://english.api.rakuten.net/ossacodes/api/newegg-data-scraper?endpoint=apiendpoint_e55464a5-b9c6-4b78-bdcd-3f3e848a709d

// Fetches data from data scraper api through search query
export async function getAll(searchQuery) {
  // if no search query is received, default 'RTX' query is sent to api
  if (!searchQuery || searchQuery === 'all') {
    searchQuery = "RTX";
  } 

  const url = `https://newegg-data-scraper.p.rapidapi.com/search/${searchQuery}`;
  const options = {
    "method": "GET",
    "headers": {
      "searchquery": "RTX",
      "x-rapidapi-key": "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd",
      "x-rapidapi-host": "newegg-data-scraper.p.rapidapi.com"
    }
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
// Fetches details of a product from product link
export async function getOne(link) {
  const url = "https://newegg-data-scraper.p.rapidapi.com/products/?productUrl="+link;
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd",
      "x-rapidapi-host": "newegg-data-scraper.p.rapidapi.com",
    },
  }
  const res = await fetch(url, options)
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}