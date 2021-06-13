$(document).ready(function() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var loader = document.getElementsByClassName("loader");
    var btn = document.getElementById("submit-buton");

    $(loader).fadeOut(0);

    $(btn).click(function() {
        if(username.value=="admin" && password.value =="1234"){ 
            $(loader).fadeIn(3000);
            setTimeout(() => {
                    document.getElementById("myform").submit();
            },3000);
        }
        else{
            alert("Please Enter valid username and password");
        }
    });
    
    


});  
