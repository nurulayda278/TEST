const API_KEY = "// GoldAPI.io Response
{
  "timestamp": 1777005765,
  "metal": "XAU",
  "currency": "USD",
  "exchange": "FOREXCOM",
  "symbol": "FOREXCOM:XAUUSD",
  "prev_close_price": 4693.025,
  "open_price": 4693.025,
  "low_price": 4658.09,
  "high_price": 4711.21,
  "open_time": 1776988800,
  "price": 4665.825,
  "ch": -27.2,
  "chp": -0.58,
  "ask": 4666.32,
  "bid": 4665.36,
  "price_gram_24k": 150.0098,
  "price_gram_22k": 137.5089,
  "price_gram_21k": 131.2585,
  "price_gram_20k": 125.0081,
  "price_gram_18k": 112.5073,
  "price_gram_16k": 100.0065,
  "price_gram_14k": 87.5057,
  "price_gram_10k": 62.5041
}";

async function getGoldPrice() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

getGoldPrice();
