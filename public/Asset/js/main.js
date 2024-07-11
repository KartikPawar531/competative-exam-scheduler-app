const loginForms = document.querySelector(".login_form")
const bothInputs = document.querySelectorAll(".input")
const labels = document.querySelectorAll(".label")
const errormsgs = document.querySelectorAll(".error_msg")

loginForm.addEventListener("submit", (e)=>{
    if(bothInput[0].value === ""){
        errormsg[0].innertext = "Email can't be blank."
        label[0].style.color = "hsl(0, 100%, 66%)"
        bothInput[0].style.border = "3px solid hsl(0, 100%, 66%)"
        e.preventdefault()
    }
    if(bothInput[1].value.length<= 8){
        errormsg[1].innertext = "Password cat least 8 characters."
        label[1].style.color = "hsl(0, 100%, 66%)"
        bothInput[1].style.border = "3px solid hsl(0, 100%, 66%)"
        e.preventdefault()
    }
    if(bothInput[1].value === ""){
        errormsg[1].innertext = "Password can't be blank."
        label[1].style.color = "hsl(0, 100%, 66%)"
        bothInput[1].style.border = "3px solid hsl(0, 100%, 66%)"
        e.preventdefault()
    }
})
bothInput.forEach(input =>{
    input.addEventListener("input", ()=>
    {
        errormsg[0].innertext=""
        label[0].style.color = "white"
        bothInput[0].style.border="none"

        errormsg[1].innertext=""
        label[1].style.color = "white"
        bothInput[1].style.border="none"
    })
})

