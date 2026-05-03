const element = document.getElementById("order"); //check
const myname = document.getElementById("myname");
const add = document.getElementById("add");

element.addEventListener("click", myFunction);

function myFunction() {
  if (myname.value === "" || add.value === "") {
    alert("Form is empty");
  } else {
    alert("Order placed successfully");
    window.location.assign("index.html");
}
}


