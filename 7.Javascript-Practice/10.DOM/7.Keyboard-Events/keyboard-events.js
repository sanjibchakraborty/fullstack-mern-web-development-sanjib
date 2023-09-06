//select h1
const h1 = document.querySelector("h1");

//-----
//Keyboard events
//-----

//Keydown - when the key is pressed down

document.body.addEventListener("keydown", function (e) {
  console.log("You are pressing the key", e.key);
  h1.innerHTML = `You are pressing the key ${e.key} 😜`;
});

//keyup- when the key is released
document.body.addEventListener("keyup", function (e) {
  h1.innerHTML = `You released the key ${e.key} 😡`;
});
