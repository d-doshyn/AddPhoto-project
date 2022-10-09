let getEmail = () => {
    let emailValue = document.querySelector(".email-input").value;
    let textValid = document.querySelector(".validation");
    let regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (emailValue.match(regexp)) {
        textValid.classList.remove("fa-circle-xmark");
        textValid.classList.add("fa-circle-check");
    } else {
        textValid.classList.remove("fa-circle-check");
        textValid.classList.add("fa-circle-xmark");
    }

    if (emailValue === "") {
        textValid.classList.remove("fa-circle-xmark");
        textValid.classList.remove("fa-circle-check");
        textValid.classList.add("fa-circle-dot");
    }
}