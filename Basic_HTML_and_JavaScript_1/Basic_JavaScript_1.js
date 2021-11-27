function My_First_Function() {
    var String = "Kiss me, I'm Irish!";
    var result = String.fontcolor("green");
    document.getElementById("Irish").innerHTML = result;
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["phone"].value;
    if (x == "" || y == "" || z == "") {
        alert("All fields must be filled out");
        return false;
    }
}


function openForm() {
    document.getElementById("theForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("theForm").style.display = "none";
  }