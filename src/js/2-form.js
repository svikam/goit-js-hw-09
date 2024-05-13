'use strict';
const formData = { email: "", message: "" };
const storageKey = "feedback-form-state";
const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleInput);
populateText();

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function populateText() {
    const data = JSON.parse(localStorage.getItem(storageKey));
    if (!data) {
        return;
    }
    const { email, message } = form.elements;
    email.value = data.email;
    message.value = data.message;
    Object.assign(formData, data);
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(storageKey);
    Object.assign(formData, { email: '', message: ''});
}


