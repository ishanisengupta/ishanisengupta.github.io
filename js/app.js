const contactForm = document.querySelector('.contact-form');

let names = document.getElementById('names');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.querySelector('textarea[name="message"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formData = {
        names: names.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            names.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));

})