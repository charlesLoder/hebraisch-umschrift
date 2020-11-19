const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const deutsch = document.querySelector("#deutsch");
const english = document.querySelector("#english");
const germanTxt = document.querySelectorAll(".german");
const geEls = Array.from(germanTxt);
const englishTxt = document.querySelectorAll(".english");
const enEls = Array.from(englishTxt);

const umschrift = require("umschrift");
const Text = umschrift.Text;

// sets English as hidden by default
enEls.forEach((el) => (el.style.display = "none"));

english.addEventListener("change", (e) => {
  if (e.target.checked) {
    geEls.forEach((el) => (el.style.display = "none"));
    enEls.forEach((el) => (el.style.display = "block"));
  }
});

deutsch.addEventListener("change", (e) => {
  if (e.target.checked) {
    enEls.forEach((el) => (el.style.display = "none"));
    geEls.forEach((el) => (el.style.display = "block"));
  }
});

btn.addEventListener("click", () => {
  try {
    const heb = input.value;
    const text = new Text(heb);
    const transliteration = text.transliterate();
    output.value = transliteration;
  } catch (e) {
    alert("There was an error: " + e.message);
  }
});
