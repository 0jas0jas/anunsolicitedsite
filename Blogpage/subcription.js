const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const inputBtn = document.querySelector(".input-button");
const PulseName = document.querySelector("#namePulse");
const PulseEmail = document.querySelector("#emailPulse");
const PulseBtn = document.querySelector("#sp-f9db1271-1de7-4ccb-b380-509f26f33df0");


inputBtn.addEventListener('click', function(){
    PulseName.value = Name.value;
    PulseEmail.value = email.value;
    PulseBtn.click();
    inputBtn.classList.add('clicked');
    inputBtn.innerHTML = "DONE!";
    setTimeout(function () {
        inputBtn.classList.remove('clicked');
        inputBtn.innerHTML = "Subscribe";
        console.log("EASTER EGG.")
    }, 3000);
})