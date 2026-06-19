async function fetchSite(urlString) {
  const response = await fetch(urlString);
  return response.text();
}

fetchSite('https://itexpcert2cdn.mymt-cdn-waf-ofg.com')
  .then(html => console.log(html))
  .catch(error => console.error('エラー:', error));
