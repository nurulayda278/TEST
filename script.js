<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Gold Price Malaysia</title>
  <style>
    body {
      font-family: Arial;
      background: #111;
      color: #fff;
      text-align: center;
      padding: 30px;
    }

    .box {
      background: #222;
      padding: 20px;
      margin: 10px auto;
      width: 320px;
      border-radius: 10px;
    }

    h1 {
      color: gold;
    }

    p {
      margin: 8px 0;
    }
  </style>
</head>
<body>

<h1>💰 Harga Emas Live Malaysia</h1>

<div class="box">
  <p id="999">999: loading...</p>
  <p id="916">916: loading...</p>
  <p id="875">875: loading...</p>
  <p id="835">835: loading...</p>
  <p id="750">750: loading...</p>
  <p id="585">585: loading...</p>
</div>

<script>
const API_KEY = "478409b6bf23e895e5d8bbc1a0930776";

// tukar ikut market (boleh adjust)
const USD_TO_MYR = 4.70;

async function getGold() {
  try {
    const url = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=XAU`;

    const res = await fetch(url);
    const data = await res.json();

    const xau = data.rates.XAU;

    // 1 troy ounce = 31.1035 gram
    const pricePerGramUSD = xau / 31.1035;
    const pricePerGramMYR = pricePerGramUSD * USD_TO_MYR;

    // mutu emas
    const gold999 = pricePerGramMYR * 1;
    const gold916 = pricePerGramMYR * 0.916;
    const gold875 = pricePerGramMYR * 0.875;
    const gold835 = pricePerGramMYR * 0.835;
    const gold750 = pricePerGramMYR * 0.750;
    const gold585 = pricePerGramMYR * 0.585;

    document.getElementById("999").innerText = "999: RM " + gold999.toFixed(2) + " /g";
    document.getElementById("916").innerText = "916: RM " + gold916.toFixed(2) + " /g";
    document.getElementById("875").innerText = "875: RM " + gold875.toFixed(2) + " /g";
    document.getElementById("835").innerText = "835: RM " + gold835.toFixed(2) + " /g";
    document.getElementById("750").innerText = "750: RM " + gold750.toFixed(2) + " /g";
    document.getElementById("585").innerText = "585: RM " + gold585.toFixed(2) + " /g";

  } catch (err) {
    console.log(err);
  }
}

getGold();
</script>

</body>
</html>
