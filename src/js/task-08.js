
const form = document.querySelector('.login-form');
    const formData = {};

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }

    formData.email = email.value;
    formData.password = password.value;

    console.log(formData);
    event.currentTarget.reset();
    
};

