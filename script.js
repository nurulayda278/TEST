const API_KEY = "478409b6bf23e895e5d8bbc1a0930776";

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
