var loginBtn=document.querySelector("#loginBtn");
var signEmail=document.querySelector("#signEmail");
var signPass=document.querySelector("#signPass");
var valid=document.querySelector("#valid");

var users=[];
if(localStorage.getItem("allUsers")!=null){
    users=JSON.parse(localStorage.getItem("allUsers"));
}
console.log(users);
loginBtn.addEventListener("click",function(){
login();

})

function login(){
    var userData={
        email:signEmail.value,
        pass:signPass.value
    }
    if(checkUserValid(userData)==true){
alert("loggedin");
valid.classList.replace("d-block","d-none");
    window.location.href="../../index.html";
    }else{
       valid.classList.replace("d-none","d-block");
    }
}
function checkUserValid(userData){
for(var i=0;i<users.length;i++){
    if(users[i].email.toLowerCase()==userData.email.toLowerCase() && users[i].pass==userData.pass){
    console.log("found");
    localStorage.setItem("uName",users[i].name);
    return true;
    }
}
}