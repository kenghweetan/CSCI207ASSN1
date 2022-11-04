/* var lineTo = []; */

const issues = [];
let currentIssue = 1;
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.querySelector("#myCanvas");
  canvas.setAttribute("height", canvas.getBoundingClientRect().height);
  canvas.setAttribute("width", canvas.getBoundingClientRect().width);
  var inspectionTable = document.querySelector(".issue-table-wrapper");
  inspectionTable.style.height = canvas.getBoundingClientRect().height;
  if (!canvas.getContext) {
    return;
  }
  var ctx = canvas.getContext("2d");

  canvas.addEventListener("click", (e) => {
    var offset = canvas.getBoundingClientRect();
    var x = e.clientX - offset.left;
    var y = e.clientY - offset.top;
    drawCurrentIssue(x, y);
    appendIssueRow();
    currentIssue++;
  });

  function drawCurrentIssue(x, y) {
    ctx.beginPath();
    ctx.font = "bold 1em open sans, sans-serif";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    /* ctx.moveTo(x - 20, y - 20);
    ctx.lineTo(x + 20, y + 20);

    ctx.moveTo(x + 20, y - 20);
    ctx.lineTo(x - 20, y + 20);
    ctx.stroke(); */

    ctx.fillText(currentIssue, x, y);
  }

  function appendIssueRow() {
    const tableBody = document.querySelector(".issue-details");
    const tableRow = document.createElement("tr");
    tableRow.classList.add("issue");
    const issueNumber = document.createElement("td");
    issueNumber.classList.add("issue-number");
    issueNumber.innerHTML = currentIssue;
    const issueDesc = document.createElement("td");
    issueDesc.classList.add("issue-desc");
    const issueDescInput = document.createElement("input");
    issueDescInput.type = "text";
    const issuePrice = document.createElement("td");
    issuePrice.classList.add("issue-price");
    const issuePriceInput = document.createElement("input");
    issuePriceInput.type = "number";
    tableBody.append(tableRow);
    tableRow.append(issueNumber);

    issuePriceInput.addEventListener("change", () => {
      const totalDamages = issues.reduce(
        (previousTotal, issue) => previousTotal + Number(issue.value),
        0
      );
      document.querySelector(".damages").innerHTML = `$${(
        Math.round(totalDamages * 100) / 100
      ).toFixed(2)}`;

      document.querySelector(".subtotal").innerHTML = `$${(
        Math.round((totalDamages + 160) * 100) / 100
      ).toFixed(2)}`;

      document.querySelector(".gst").innerHTML = `$${(
        Math.round((totalDamages + 160) * 100 * 0.07) / 100
      ).toFixed(2)}`;

      document.querySelector(".total").innerHTML = `$${(
        Math.round((totalDamages + 160) * 100 * 1.07) / 100
      ).toFixed(2)}`;
    });
    tableRow.append(issueDesc);
    issueDesc.append(issueDescInput);
    tableRow.append(issuePrice);
    issuePrice.innerHTML = "$ ";
    issuePrice.append(issuePriceInput);
    issues.push(issuePriceInput);
    /*     <tr class="issue">
      <td class="issue-number"></td>
      <td>
        <input class="issue-desc" type="text" value="Dented side panel"></input>
      </td>
      <td>
        $<input type="number" value="100.00" />{" "}
      </td>
    </tr>; */
  }
});

document.getElementById("show-inspection").addEventListener("click", () => {
  console.log("hi");
  document.querySelector(".icon-in-button").classList.toggle("show");
  document.querySelector(".inspection-info").classList.toggle("show");
});

const showPaymentDialog = () => {
  document.querySelector(".invoice-modal").classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
  body.style.overflowY = "hidden";
  setTimeout(() => {
    document.querySelector(".circle-loader").classList.add("load-complete");
    document.querySelector(".checkmark").style.display = "block";
    document.querySelector(".invoice-content").classList.add("show");
  }, 1000);
};

const closePaymentDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  body.style.overflowY = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.querySelector(".invoice-modal").classList.remove("show");
};

const paymentButton = document.querySelector("#invoice-button");
paymentButton.addEventListener("click", showPaymentDialog);

document.getElementById("close-invoice").addEventListener("click", () => {
  window.sessionStorage.setItem("invoice", "sent");
  window.location.href = "admin.html";
});
