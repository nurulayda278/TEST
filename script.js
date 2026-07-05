const API_KEY = "YOUR_GOLDAPI_KEY";

async function getGoldPrice() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    return {
      usd_per_oz: data.price,
      myr_per_gram_24k: data.price_gram_24k,
      myr_per_gram_22k: data.price_gram_22k,
      myr_per_gram_21k: data.price_gram_21k,
      myr_per_gram_20k: data.price_gram_20k,
      myr_per_gram_18k: data.price_gram_18k,
      change: data.ch,
      change_percent: data.chp,
      bid: data.bid,
      ask: data.ask
    };

  } catch (error) {
    console.error("Gold API error:", error);
    return null;
  }
}
