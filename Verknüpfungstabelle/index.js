"use strict";

let tbodyAnd = document.getElementById("and").children[1];
let tbodyOr = document.getElementById("or").children[1];

let aValues = [true, false];
let bValues = [true, false];

for (let a of aValues) {
  for (let b of bValues) {
    let tr = document.createElement("tr");

    let td0 = document.createElement("td");
    td0.innerHTML = a;

    let td1 = document.createElement("td");
    td1.innerHTML = b;

    let td2 = document.createElement("td");
    td2.innerHTML = a && b;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);

    tbodyAnd.appendChild(tr);
  }
}

for (let a of aValues) {
  for (let b of bValues) {
    let tr = document.createElement("tr");

    let td0 = document.createElement("td");
    td0.innerHTML = a;

    let td1 = document.createElement("td");
    td1.innerHTML = b;

    let td2 = document.createElement("td");
    td2.innerHTML = a || b;

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);

    tbodyOr.appendChild(tr);
  }
}
