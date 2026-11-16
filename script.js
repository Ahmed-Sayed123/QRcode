let input = document.getElementById("text");
let generate = document.getElementById("generate");
let clear = document.getElementById("clear");
let qrcode = document.getElementById("qrcode");

generate.onclick = function () {
  let value = input.value.trim();

  if (value === "") {
    alert("Please enter some text!");
    return;
  }

  qrcode.innerHTML = "";

  new QRCode(qrcode, {
    text: value,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
};

clear.onclick = function () {
  input.value = "";
  qrcode.innerHTML = "";
};
