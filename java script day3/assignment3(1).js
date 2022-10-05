document.getElementById("submitButton").addEventListener('click',function(){
    let userName = document.getElementById("idTextBox").value;
     let password = document.getElementById("passwordTextBox").value;
 
     if (userName.toUpperCase()  == 'CITIUSTECH' && password.toUpperCase()  == 'CITIUSTECH'){
         window.open("https://www.google.com/")
     }
     else if (userName == 'citiustech'){
         document.getElementById("span2").textContent = "invalid password"
     }
     else{
         document.getElementById("span1").textContent = "invalid ID"
     }
 })