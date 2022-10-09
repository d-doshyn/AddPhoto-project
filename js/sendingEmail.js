let buttonToSend = document.querySelector(".send-mail");


buttonToSend.onclick = (e) => {
    e.preventDefault();
    
    let nameInput = document.querySelector(".name-input-text").value;
    let mailInput = document.querySelector(".email-input").value;
    let numberInput = document.querySelector(".phone-number-input").value;

    let templateParams = {
        userName: nameInput,
        email: mailInput,
        number: numberInput
    }

    emailjs.init("kBOW8N-Edy7yi5g_l");

    emailjs.send('service_n5l8fiv', 'template_cakz8px', templateParams)
	    .then(function(response) {
	        console.log('SUCCESS!', response.status, response.text);
	    }, function(error) {
	        console.log('FAILED...', error);
        }
    );

}