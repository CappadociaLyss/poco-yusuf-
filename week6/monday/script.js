function myfunction() {
  myfunction;
}

var h3 = document.querySelector("h3");
h3.onclick = function () {
  writeIntoConsole();
};

function writeIntoConsole() {
  console.log(writeIntoConsole);
  alert("Open console!");
}

document.querySelector("h5").addEventListener("click", writeInConsole);
function writeInConsole(){

    console.log(" I am fine");
}
