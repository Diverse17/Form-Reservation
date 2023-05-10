import { renderForm } from "./render-form.js";

const formReservation = document.querySelector('form');

renderForm();

const generateData = () => {
    const data = {};
    const formData = new FormData(formReservation);
    for (let key of formData.keys()) {
        data[key] = formData.get(key);
    }
    return data;
};

formReservation.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const sentData = generateData();
    const jsonData = JSON.stringify(sentData);
    console.log(jsonData);
});
