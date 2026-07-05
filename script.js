const API_KEY = "GET https://api.metals.dev/v1/latest

{
    "status": "success",
    "currency": "USD",
    "unit": "toz",
    "metals": {
        "gold": 1929.15,
        "silver": 22.99,
        "platinum": 921.398,
        "lbma_gold_am": 1913.75,
        "lbma_gold_pm": 1928.75,
        [28+ precious & industrial metal prices]
    },
    "currencies": {
        "GBP": 1.26962,
        "EUR": 1.08955,
        "JPY": 0.006925,
        [170+ currency conversion rates]
    },
    "timestamp": "2023-07-04T09:01:04.744Z"
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
