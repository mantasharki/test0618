async function fetchSite(urlString) {
  const response = await fetch(urlString);
  return response.text();
}

fetchSite('https://mantasharki.github.io/destinationpage/')
  .then(html => console.log(html))
  .catch(error => console.error('エラー:', error));
