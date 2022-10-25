let HH1 = document.getElementById("Hone");
let p = document.querySelector(".new");
let alink = document.querySelector(".W3school");

for (let i = 0; i < 2; i++) {
  //appending (ekleme)
  HH1.textContent += i;
  // HH1.textContent = HH1.textContent + " " + i;
}

for (let i = 0; i < 4; i++) {
  //prepending (başa eklemek)
  p.textContent = i + " " + p.textContent;
}

for (let i = 0; i < 7; i++) {
  //replacing (değiştirme)
  alink.textContent = i;
}
