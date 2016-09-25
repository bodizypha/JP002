function addRow() {
    "use strict";

    var tableBody = document.getElementById("table-body");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var row = document.createElement("tr");

    td1.innerHTML = document.getElementById("firstname").value;
    td2.innerHTML = document.getElementById("lastname").value;
    td3.innerHTML = document.getElementById("home").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    tableBody.appendChild(row);
}