const API_KEY = "https://api.metalpriceapi.com/v1/latest ?api_key=478409b6bf23e895e5d8bbc1a0930776 &base=USD &currencies=EUR,XAU,XAG";

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
