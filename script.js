const API_KEY = "curl -X GET 'https://www.goldapi.io/api/XAU/USD' 
     -H 'x-access-token: YOUR_API_KEY";

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
