//Select elements
const pName = document.querySelector(".pName");
const pPrice = document.querySelector(".pPrice");
const pDesc = document.querySelector(".pDesc");
const pQty = document.querySelector(".pQty");
const category = document.querySelector(".category");
const msg = document.querySelector(".msg");
const form = document.querySelector("form");

//-------
//Event types
//------

//1. onChange
//2. onSubmit
//3. onReset
//4. onFocus
//5. onBlur

//onchange
// pName.onchange = function (e) {
//   console.log("onchange has occured");
// };

//onsubmit
form.onsubmit = function (e) {
  //prevent the default behaviour of the form
  e.preventDefault();
  console.log("Form submitted");

  //get the value from the input fields
  const name = pName.value;
  const price = pPrice.value;
  const desc = pDesc.value;
  const qty = pQty.value;
  const cat = category.value;

  //reset after submit
  pName.value = "";
  pPrice.value = "";
  pDesc.value = "";
  pQty.value = "";
  category.value = "";
  console.log({ name, price, desc, qty, cat });
};

// form.onreset = function (e) {
//   console.log("form reset");
//   //prevent the default behaviour of the form
//   e.preventDefault();
//   console.log("Form submitted");

//   //get the value from the input fields
//   pName.value = "";
//   pPrice.value = "";
//   pDesc.value = "";
//   pQty.value = "";
//   category.value = "";

//   console.log({ name, price, desc, qty, cat });
// };

//onfocus

pName.onfocus = function () {
  console.log("form focused");
  msg.innerHTML = "You are typing... 💚";
};

pName.onblur = function () {
  console.log("form focused");
  msg.innerHTML = "You have stopped typing... 💔";
};
