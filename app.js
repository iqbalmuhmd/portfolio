var btn = document.getElementById("subBtn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    var name = document.getElementById("nameField").value;
    var mail = document.getElementById('email').value; 
    var mailError = document.getElementById('emailError')
    var message = document.getElementById('message');
    var messageError = document.getElementById("messageError"); 
    console.log(name);
    var nameError = document.getElementById("nameError");

    // Name
    if(name.length==null||name.length==0){
        console.log(true);
        nameError.innerHTML = "name field must be filled";
        return false;
    }else{
        nameError.innerHTML = "";
    }

    // email

    if(mail.length==0||mail==null){
        mailError.innerHTML ="Email be Filled";
        return false;
    }else{
        mailError.innerHTML = "";
    }

    if(mail.includes("@"&&".")){
        mailError.innerHTML ="";
    }
    else{
        mailError.innerHTML = "Must Contain @ and .";
        return false;
    }

    if(message.length==null||message.lenght==0)[
        messageError.innerHTML="Message Must Contain morethan 4 characters"
    ]

    return true;

});

// function validate(event){
//     event.preventDefault();
//     var name = document.getElementById("nameField");
//     console.log(name);
// }