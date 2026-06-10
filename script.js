function sendMessage(){

let msg=document.getElementById("msg").value;

let box=document.getElementById("messages");

box.innerHTML += "<p><b>You:</b> "+msg+"</p>";

document.getElementById("msg").value="";

}