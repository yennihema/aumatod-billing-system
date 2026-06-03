let grandTotal = 0;

function addItem() {
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let qty = document.getElementById("qty").value;

  let total = price * qty;

  let table = document.getElementById("billList");

  let row = table.insertRow();

  row.insertCell(0).innerText = product;
  row.insertCell(1).innerText = price;
  row.insertCell(2).innerText = qty;
  row.insertCell(3).innerText = total;

  grandTotal += total;

  document.getElementById("grandTotal").innerText =
    "Grand Total: " + grandTotal;

  // clear inputs
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
}