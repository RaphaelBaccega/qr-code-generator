// Change Theme

const container = document.querySelector(".container");
const content = document.querySelector(".content");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  container.classList.toggle("light");
  content.classList.toggle("light-content");
});

// QR CODE
const button = document.querySelector("button");
const msg = document.querySelector(".msg-generate");
const qrCode = document.querySelector("#qr-code");
const userInput = document.querySelector("input");

function clear() {
  msg.classList.remove("off");
  qrCode.src = "";
}

function message() {
  msg.classList.add("off");
}

function generateQrCode() {
  const googleChartAPI =
    "https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=";
  const qrCodeContent = googleChartAPI + userInput.value;
  qrCode.src = qrCodeContent;
}

function start() {
  clear();

  setTimeout(() => {
    generateQrCode();
    message();
  }, 1000);
}

userInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    start();
  }
});

button.addEventListener("click", start);
