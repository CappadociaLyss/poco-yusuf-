
let b = document.querySelector("p");
console.log(b);




  let el = document.querySelector("#demo");
  el.style.color="#6600FF";
  el.style.width="300px";
  el.style.border="solid"
  el.style.backgroundColor="red";


  let span = document.createElement("span");
  let node = document.createTextNode(" Some new text ");
  let parent = document.querySelector("#demo");
  span.appendChild(node);
  parent.appendChild(span);





let li =document.createElement("li");
let per = document.createTextNode(" List 4 ");
let der =document.querySelector("#ss");
li.appendChild(per);
der.appendChild(li);
