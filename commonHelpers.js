import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const t={calendar:document.querySelector("#datetime-picker"),btn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null,d=null;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(t.btn.disabled=!1,d=e[0]):(t.btn.disabled=!0,h.show({message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#ef4040"}))}};f(t.calendar,y);const b={start(){const e=d;r=setInterval(()=>{const o=Date.now(),n=e-o;if(t.btn.disabled=!0,n<=0)clearInterval(r),c({days:"00",hours:"00",minutes:"00",seconds:"00"}),t.btn.disabled=!1;else{const s=p(n);c(s)}},1e3)}};t.btn.addEventListener("click",()=>{b.start()});function p(e){const u=a(Math.floor(e/864e5)),i=a(Math.floor(e%864e5/36e5)),l=a(Math.floor(e%864e5%36e5/6e4)),m=a(Math.floor(e%864e5%36e5%6e4/1e3));return{days:u,hours:i,minutes:l,seconds:m}}function a(e){return String(e).padStart(2,"0")}function c({days:e,hours:o,minutes:n,seconds:s}){t.days.textContent=`${e}`,t.hours.textContent=`${o}`,t.minutes.textContent=`${n}`,t.seconds.textContent=`${s}`}
//# sourceMappingURL=commonHelpers.js.map