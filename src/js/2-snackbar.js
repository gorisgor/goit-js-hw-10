import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const DELAY_INPUT_SELECTOR = "input[name='delay']";
const CHECKBOX_STATE_SELECTOR = "input[name='state']";
const SUBMIT_FORM_SELECTOR = ".form";

const refs = {
    delayInput: document.querySelector(DELAY_INPUT_SELECTOR),
    checkboxState: document.querySelectorAll(CHECKBOX_STATE_SELECTOR),
    submitForm: document.querySelector(SUBMIT_FORM_SELECTOR)
};

const delayTime = () => Number(refs.delayInput.value);
const selectedState = () => Array.from(refs.checkboxState).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

const clearForm = () => {
    refs.delayInput.value = '';
    refs.checkboxState.forEach(checkbox => checkbox.checked = false);
};

const createPromise = (state, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else if (state === 'rejected') {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
};

const onSubmit = event => {
    event.preventDefault();
    clearForm();

    const state = selectedState();
    const delay = delayTime();

    createPromise(state.includes('fulfilled') ? 'fulfilled' : 'rejected', delay)
        .then(message => {
            iziToast.success({
                title: 'Success',
                message: message,
                position: 'topRight',
            });
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error,
                position: 'topRight',
            });
        });
};

refs.submitForm.addEventListener("submit", onSubmit);