
export async function getAll(searchQuery) {
  if (!searchQuery || searchQuery === 'all') {
    console.log("no query search detected")
    searchQuery = "RTX";
  } else {
    console.log(searchQuery + "custom query received");
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

export async function getOne(link) {
  const url = "https://newegg-data-scraper.p.rapidapi.com/products/?productUrl="+link;
  const options = {
    "method": "GET",
    "headers": {
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


// export async function getAll() {

//   const url = "https://newegg-data-scraper.p.rapidapi.com/search/RTX";
//   const options = {
//     "method": "GET",
//     "headers": {
//       "searchquery": "RTX",
//       "x-rapidapi-key": "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd",
//       "x-rapidapi-host": "newegg-data-scraper.p.rapidapi.com"
//     }
//   }

//   const res = await fetch(url, options);
//   if (res.ok) return res.json();
//   throw new Error('Bad Request');
// }
