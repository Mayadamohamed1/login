// ^ element html
var signUpName=document.querySelector("#signUpName");
var signUpEmail=document.querySelector("#signUpEmail");
var signUpPass=document.querySelector("#signUpPass");
var signUpBtn=document.querySelector("#signUpBtn");
var valid=document.querySelector("#valid");
//variable
var users=[];
if(JSON.parse(localStorage.getItem("allUsers"))!=null){
    users=JSON.parse(localStorage.getItem("allUsers"));
}
//function
function validation(regex,element,alertt){
    var regexName=regex;
   if( regexName.test(element.value)==true){
    console.log("valid");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
   }else{
    alert(`${alertt}`);
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false
   }
}
function checkInputs(){
    if(validation(/^[A-Za-z]{3,}$/,signUpName,"invalid please!include at least 3 character")==true&&
    validation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,signUpEmail,"invalid please! Enter valid Email")==true&&
    validation(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,signUpPass,"invalid please! Enter At least 8characters")==true){
        alert("All Input Are Valid");
        return true;
    }else{
        alert("invalid");
        return false;
    }
}
signUpBtn.addEventListener('click',function(){
    if(checkInputs()){
        addUser();
        email();
    }
    });
    
    function addUser(){
        var newUser={
            name:signUpName.value,
            email:signUpEmail.value,
            pass:signUpPass.value
        }
        if(email(newUser)==true){
alert("Already Exist");
        }else{
            window.location.href="../../signIn/index.html";
            users.push(newUser);
            localStorage.setItem("allUsers",JSON.stringify(users));
        }
      
    }
    function email(newUser){
        for (let i = 0; i < users.length; i++) {
            if(users[i].email.toLowerCase()==signUpEmail.value.toLowerCase()){
                valid.innerHTML=`<span class="text-danger my-3 fw-bolder fs-4">Email Exist</span>`;
                return true;
            }
            
        }
    }