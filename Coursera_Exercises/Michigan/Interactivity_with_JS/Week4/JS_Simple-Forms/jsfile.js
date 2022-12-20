function check (){
    let email1 = document.getElementById("email");
    let email2 = document.getElementById("confirm_email");
    if (email1.value != email2.value){
        alert("The two emails must match!!")
        return false
    }
}

function nicknameFunction() {
  if (yesNick.checked) {
    nick.style.display = "inline";
    nickname.setAttribute("required", true);
  } else {
    nickname.removeAttribute("required");
    nick.style.display = "none";
  }
}
