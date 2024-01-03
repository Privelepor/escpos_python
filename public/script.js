const { LocalStorage } = require("node-localstorage");

//Aeo30294ierijr@w@#@
let counter = 1;
let sum = 0;
let qty = 0;
const d = new Date();
const date = d.toLocaleDateString();
const time = d.toLocaleTimeString();
// Get the table body element in which you want to add row
let table = document.getElementById("tbl");
var number = 20;

const addRow = () => {
  for (let j = 1; j <= 5; j++) {
    // Create row element
    let row = document.createElement("tr");

    // Create cells
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");

    // Insert data to cells
    for (let i = number; i < number + 2; i++) {
      c1.innerHTML = `<input list="maal" id=${i * 100} style="width:100px;"> `;
      c2.innerHTML = `<input type=number id=${i} style="width:100px;" onchange="showSum()">`;
      c3.innerHTML = `<input type=number id=${
        i + 1
      } style="width:100px;" onchange="showSum();" oninput="showQty();showSum();"">`;
      c4.innerHTML = `<td></td>`;
      c4.setAttribute("class", i);
    }
    if (j == 5) {
      c2.addEventListener("change", () => {
        addRow();
      });
    }
    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    // Append row to table body
    document.getElementById("tbl").appendChild(row);
    number = number + 2;
    this.number = number;
  }
};

let showSum = () => {
  let total = 0;
  for (let i = 1; i <= number; i = i + 2) {
    if (document.getElementById(i).value) {
      console.log(number);
      let z = document.getElementById(i);
      let y = document.getElementById(i + 1);
      let Sumvar = document.getElementsByClassName(i);
      console.log(Sumvar);
      try {
        Sumvar[0].innerHTML = y.value * z.value;
        total = total + y.value * z.value;
      } catch {
        Sumvar[1].innerHTML = y.value * z.value;
        total = total + y.value * z.value;
      }
    }
  }
  let someVar = document.getElementById("graTotal");
  someVar.innerText = total;
  total = 0;
};

let showQty = () => {
  for (let i = 1; i <= number; i = i + 2) {
    if (document.getElementById(i + 1).value) {
      let y = document.getElementById(i + 1);
      try {
        qty = qty + y.value * 1;
        document.getElementById("qtySum").innerText = qty;
      } catch {
        qty = qty + y.value * 1;
        document.getElementById("qtySum").innerText = qty;
      }
    }
  }
  this.qty = qty;
  qty = 0;
};

const prtReciept = () => {
  let firm = document.getElementById("firm").value;
  const phone = document.getElementById("phone").value;
  const priWin = window.open("", "", "width=750px,height=1000px");
  priWin.document.write(`
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
        <style>
            body {
                width: 3in;
                margin-left:0.1in;
                font-family: "PT Sans", sans-serif;
            }
    
            @page {
                size: 2.8in 11in;
                margin-top: 0cm;
                margin-left: 0.1in;
                margin-right: 0cm;
            }
    
            table {
                width: 100%;
            }
    
            tr {
                width: 100%;
    
            }
    
            h1 {
                text-align: center;
                vertical-align: middle;
            }
            header {
                width: 100%;
                text-align: center;
                -webkit-align-content: center;
                align-content: center;
                vertical-align: middle;
            }
    
            .items thead {
                text-align: center;
            }
    
            .center-align {
                text-align: center;
            }
    
            .bill-details td {
                font-size: 16px;
            }
    
            .receipt {
                font-size: large;
            }
    
            .items .heading {
                font-size: 16.5px;
                text-transform: uppercase;
                border-top: 1px solid black;
                margin-bottom: 4px;
                border-bottom: 1px solid black;
                vertical-align: middle;
            }
    
            .items thead tr th:first-child,
            .items tbody tr td:first-child {
                width: 47%;
                min-width: 47%;
                max-width: 47%;
                word-break: break-all;
                text-align: left;
            }
    
            .items td {
                font-size: 16px;
                text-align: right;
                vertical-align: bottom;
            }
    
            .price::before {
                font-family: Arial;
                text-align: right;
            }
    
            .sum-up {
                text-align: right !important;
            }
    
            .total {
                font-size: 17px;
                border-top: 1px dashed black !important;
                border-bottom: 1px dashed black !important;
            }
    
            .total.text,
            .total.price {
                text-align: right;
            }
    
            .total.price::before {
                
            }
    
            .line {
                border-top: 1px solid black !important;
            }
             .heading.name {
                width: 55%;
            }
            .heading.rate {
                width: 15%;
            }
    
            .heading.amount {
                width: 18%;
            }
    
            .heading.qty {
                width: 4px
            }
    
            p {
                padding: 1px;
                margin: 0;
            }
    
            section,
            footer {
                font-size: 12px;
            }
        </style>
    </head>
    
    <body>
        <header style="border-bottom: 1px dashed black !important;">
                <span style="font-size:20px; margin-top:-5px;"><b>Royal Bag Center,</b></span><br />
                <span style="font-size:20px; margin-top:-5px;"><b>Khargone</b></span>
            </div>  
        </header>
        <b>
            <table class="bill-details">
                <tbody>
                    <tr>
                        <td>Date : <span>${date}</span></td>
                        <td>Time : <span>${time}</span></td>
                    </tr>
                    <tr>
                        <td>To : <span>${firm}</span></td>
                        <td>Contact : <span>${phone}</span></td>
                    </tr>
                </tbody>
            </table>
    
            <table class="items">
                <thead>
                    <tr>
                        <th class="heading" style="width: 10px;">#</th>
                        <th class="heading name">Item</th>
                        <th class="heading qty">Qty</th>
                        <th class="heading rate">Rate</th>
                        <th class="heading amount">Amount</th>
                    </tr>
                </thead>
                <tbody>`);

  for (let i = 1; i <= number; i = i + 2) {
    if (document.getElementById(i).value) {
      let ch = document.getElementById(i * 100);
      let a = document.getElementById(i);
      let b = document.getElementById(i + 1);
      priWin.document.write(`
      <tr>
          <td>${counter}</td>
          <td><span style="font-size:12px;font-align:left;">${
            ch.value
          }</span></td>
          <td>${b.value}</td>
          <td class="price">₹${a.value}</td>
          <td class="price">₹${a.value * b.value}</td>
      </tr>`);
      sum = sum + a.value * b.value;
      this.sum = sum;
      counter += 1;
      this.counter = counter;
    } else {
    }
  }
  priWin.document.write(`
  <tr>
                    <td colspan="4" class="sum-up line">${this.qty} <span style="font-size:14px;">Subtotal</span></td>
                    <td class="line price">₹${sum}</td>
                </tr>
                <tr>
                    <th colspan="4" class="total text">Total</th>
                    <th class="total price">₹${sum}</th>
  </tr>
  </tbody>
  </table>
  <section>
      
      <p style="text-align:center">
          Thank you visit again!
      </p>
  </section>
</body>

</html>
    `);
  sum = 0;
  counter = 1;
  setTimeout(function () {
    priWin.window.focus();
    priWin.window.print();
  }, 250);

  function downloadimage() {
    var container = priWin.document.querySelector("body");
    html2canvas(container, {
      allowTaint: true,
    }).then(function (canvas) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "../php/backend.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
      xhr.send("canvasData=" + encodeURIComponent(canvas.toDataURL()));
      var link = priWin.document.createElement("a");
      priWin.document.body.appendChild(link);
      link.download = `${firm + "_" + date + "_" + time}`;
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  }
  downloadimage();
};
