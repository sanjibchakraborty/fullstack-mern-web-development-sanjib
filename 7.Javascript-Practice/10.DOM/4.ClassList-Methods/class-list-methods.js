// Manipulating elements style
// Working with CSS methods (classlist.add/remove/toggle)
//Manipulating element content (innerHTML, textContent)

//---------
// Manipulating elements style
//---------

//-----STEPS------

//1.Select the element
const titleEl = document.querySelector(".title");

//2. set style to element
titleEl.style.color = "white";

//2. Remove style  element
// titleEl.style.color = "white";

//3. Get the computed style of the element
const computedStyle = getComputedStyle(titleEl).color;

//add background color
titleEl.style.backgroundColor = "red";
//add padding

titleEl.style.padding = "20px";
//add fontsize
titleEl.style.fontSize = "80px";

//select lis

const lisEl = document.getElementsByTagName("li");

//convert the HTMLCollection to proper array

const convertedEl = [...lisEl];
const convertedEl2 = Array.from(lisEl);

//loop through the lis and add css properties to it

convertedEl.forEach(li => {
  //add style to all the lis
  li.style.color = "red";

  if (li.innerHTML !== "JavaScript") {
    li.style.textDecoration = "line-through";
  }
});

//---------
// Working with CSS methods (classlist.add/remove/toggle)
//---------

//classList.add()
//1. select the element
const headingEl = document.getElementById("heading");
//add css class
headingEl.classList.add("error");

//remove the class :   classList.remove()

headingEl.classList.remove("error");

//-------
//Manipulating element content (innerHTML, textContent)
//-------

//Remove
//1. select the element
const coddingEl = document.querySelector(".codding");

coddingEl.textContent = "";

//add content to the page

const tagLineEl = document.querySelector(".tagline");

tagLineEl.textContent = "<h1> This is my tagline</h1>";
// tagLineEl.textContent = "This is my tagline 2";
