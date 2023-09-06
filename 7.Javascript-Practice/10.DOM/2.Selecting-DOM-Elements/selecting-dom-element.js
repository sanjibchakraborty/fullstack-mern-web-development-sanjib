//-----
//Single selectors
//-----

//1.getElementById
// const titleEl = document.getElementById("title");

//1.querySelector()

// const titleEl = document.querySelector(".title");
// const titleEl2 = document.querySelector("#title");

// console.log(titleEl2);

//-----
//multiple selectors
//-----

//1.getElementsByTagName

// const h1 = document.getElementsByTagName("h1");
// const allPs = document.getElementsByTagName("p");
// console.log(allPs);
//2.getElementsByClassName
// const titleEls = document.getElementsByClassName("title");

//3.getElementsByName()

// const nameEl = document.getElementsByName("email");

// console.log(nameEl);

//3.querySelectorAll()

//const titleEls = document.querySelectorAll("#title");
const titleEls = document.querySelectorAll(".title");

titleEls.forEach(el => {
  console.log(el);
});
