
export async function getAll() {

  const url = "https://newegg-data-scraper.p.rapidapi.com/search/RTX";
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

