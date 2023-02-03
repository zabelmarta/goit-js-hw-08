import { throttle } from 'lodash';


const refs = {
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = "feedback-form-state";
const saveData = {};




refs.input.addEventListener('input', throttle(onFormInput, 500));
refs.textarea.addEventListener('input', throttle(onFormTextarea, 500));



function onFormInput(e) {
    let email = e.target.value;
    saveData.email = email;
    console.log(email)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))

}
    

function onFormTextarea(e) {
    let massage = e.target.value;
    console.log(massage)
    saveData.massage = massage;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData))
}

function getDataFromLocalStorege() {   
    const values = localStorage.getItem(STORAGE_KEY)
    if (values) {
        const valuesPars = JSON.parse(values);
        refs.input.value = valuesPars.email;
        refs.textarea.value = valuesPars.massage;
    }
    
}

getDataFromLocalStorege();