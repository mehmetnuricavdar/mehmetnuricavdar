console.log("Hello World");
let hey = document.getElementById("shippingName").value;
console.log(hey);

function billingFunction() {
  document.getElementById("billingName").value =
    document.getElementById("shippingName").value;
  document.getElementById("billingZip").value =
    document.getElementById("shippingZip").value;
}
