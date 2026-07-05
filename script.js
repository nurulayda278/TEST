const API_KEY = "478409b6bf23e895e5d8bbc1a0930776";

async function getMetalPrice() {
  try {
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=EUR,XAU,XAG`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

getMetalPrice();
