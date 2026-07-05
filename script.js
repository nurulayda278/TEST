const API_KEY = "YOUR_GOLDAPI_KEY_HERE";

async function getGoldPrice() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    console.log("Gold Price Data:", data);

    // contoh ambil data penting
    console.log("Price per ounce:", data.price);
    console.log("Price per gram 24K:", data.price_gram_24k);

  } catch (error) {
    console.error("Error fetch gold price:", error);
  }
}

getGoldPrice();
