var login_form=document.getElementById("login_form")
var sign_form=document.getElementById("sign_form")
var indicator=document.getElementById("indicator")
function Sign()
{
    sign_form.style.transform="translateX(0px)";
    login_form.style.transform="translateX(0px)"; 
    indicator.style.transform="translateX(70px)"; 
}
function login()
{
    sign_form.style.transform="translateX(300px)";
    login_form.style.transform="translateX(300px)";
    indicator.style.transform="translateX(-50px)";  
}