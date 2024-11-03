// lib/fetchSearch.ts
async function fetchSearch(searchTerm: string) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  console.log(username, password);

  if (!username || !password) {
    throw new Error("Oxylabs credentials are not set");
  }

  const newUrl = new URL(
    `https://www.walmart.com/search?q=${encodeURIComponent(searchTerm)}`
  );

  const body = {
    source: "universal",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
        "base64"
      )}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export default fetchSearch;
