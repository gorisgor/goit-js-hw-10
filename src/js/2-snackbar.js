import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

refs.submitBtn.addEventListener('click', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const delay = refs.form.elements.delay.value;
  const state = refs.form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (state === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });
  promise.then(
    delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        progressBar: false,
      });
    },
    delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        progressBar: false,
      });
    }
  );
  refs.form.reset();
}
