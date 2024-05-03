import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  calendar: document.querySelector('#datetime-picker'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let intervalId = null;
let userSelectedDate = null;
refs.btn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      refs.btn.disabled = false;
      userSelectedDate = selectedDates[0];
    } else {
      refs.btn.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    }
  },
};
flatpickr(refs.calendar, options);

const timer = {
  start() {
    const endTime = userSelectedDate;
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      refs.btn.disabled = true;
      refs.calendar.disabled = true;
      if (deltaTime <= 0) {
        clearInterval(intervalId);
        updateClockface({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        refs.calendar.disabled = false;
      } else {
        const time = convertMs(deltaTime);
        updateClockface(time);
      }
    }, 1000);
  },
};

refs.btn.addEventListener('click', () => {
  timer.start();
});
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
