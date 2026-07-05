<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Harga Emas Malaysia (Demo)</title>

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
      font-size: 16px;
    }

    .note {
      color: #aaa;
      font-size: 12px;
    }
  </style>
</head>

<body>

<h1>💰 Harga Emas Malaysia (Demo Live)</h1>

<div class="box">
  <p id="999"></p>
  <p id="916"></p>
  <p id="875"></p>
  <p id="835"></p>
  <p id="750"></p>
  <p id="585"></p>
</div>

<p class="note">*Data demo (tanpa API), harga auto adjust sedikit untuk simulation</p>

<script>
// ===== BASE PRICE (boleh ubah manual) =====
// anggap harga emas 999 per gram RM

let basePrice = 380; // RM per gram (999 gold)

function updatePrices() {

  // simulate market naik turun sikit (±0.3%)
  let fluctuation = (Math.random() - 0.5) * 2 * 0.003;
  let price = basePrice * (1 + fluctuation);

  const gold999 = price;
  const gold916 = price * 0.916;
  const gold875 = price * 0.875;
  const gold835 = price * 0.835;
  const gold750 = price * 0.750;
  const gold585 = price * 0.585;

  document.getElementById("999").innerText = "999: RM " + gold999.toFixed(2) + " /g";
  document.getElementById("916").innerText = "916: RM " + gold916.toFixed(2) + " /g";
  document.getElementById("875").innerText = "875: RM " + gold875.toFixed(2) + " /g";
  document.getElementById("835").innerText = "835: RM " + gold835.toFixed(2) + " /g";
  document.getElementById("750").innerText = "750: RM " + gold750.toFixed(2) + " /g";
  document.getElementById("585").innerText = "585: RM " + gold585.toFixed(2) + " /g";
}

// first load
updatePrices();

// auto refresh setiap 3 saat
setInterval(updatePrices, 3000);

</script>

</body>
</html>
