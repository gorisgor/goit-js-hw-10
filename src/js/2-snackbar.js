import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    delayInput: document.querySelector("input[name='delay']"),
    checkboxState: document.querySelectorAll("input[name='state']"),
    submitForm: document.querySelector(".form") 
};

let delayTime = 0;
refs.delayInput.addEventListener("change", () => {
    delayTime = refs.delayInput.value;
});

let state = [];
const checkboxArray = Array.from(refs.checkboxState);
checkboxArray.forEach(checkbox => {
    checkbox.addEventListener("change", onCheckbox);
});

function onCheckbox() {
    state = checkboxArray.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
}

refs.submitForm.addEventListener("submit", onSubmit); 
function onSubmit(event) {
    event.preventDefault();
    refs.delayInput.value = '';
    checkboxArray.forEach(checkbox => {
        checkbox.checked = false;
    });

    let selectedState = '';
    if (state.includes('fulfilled')) {
        selectedState = 'fulfilled';
    } else if (state.includes('rejected')) {
        selectedState = 'rejected';
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delayTime}ms`);
            } else if (selectedState === 'rejected') {
                reject(`❌ Rejected promise in ${delayTime}ms`);
            }
        }, delayTime);
    });
        promise.then(message => {
            iziToast.show({
                message: message,
                messageColor: '#fff',
                backgroundColor: '#59a10d',
                position: 'topRight',
            });
        }).catch(error => {
            iziToast.show({
                message: error,
                messageColor: '#fff',
                backgroundColor: '#ef4040',
                position: 'topRight',
            })
        });
}