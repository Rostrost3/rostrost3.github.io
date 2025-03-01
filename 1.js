let sendForm = document.getElementById('form-send');
let showFormBtns = document.querySelectorAll('.showForm-btn');

for(let i = 0; i < showFormBtns.length; ++i) {
    showFormBtns[i].addEventListener('click',function() {
        sendForm.style.display = 'flex';

        setTimeout(() => {
            sendForm.style.opacity = '1';
        }, 800);

        sendForm.scrollIntoView();
    });
};

sendForm.addEventListener('submit', function(event) {
    let firstName = sendForm.querySelector('#userFirstName');
    let lastName = sendForm.querySelector('#userLastName');
    let email = sendForm.querySelector('#userEmail');
    let phone = sendForm.querySelector('#userPhone');
    let isAgree = sendForm.querySelector('#isAgree');

    alert('Спасибо,' + firstName.value + '! Мы ценим ваш вклад');
});