import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i={delayInput:document.querySelector("input[name='delay']"),checkboxState:document.querySelectorAll("input[name='state']"),submitForm:document.querySelector(".form")};let t=0;i.delayInput.addEventListener("change",()=>{t=i.delayInput.value});let n=[];const r=Array.from(i.checkboxState);r.forEach(e=>{e.addEventListener("change",c)});function c(){n=r.filter(e=>e.checked).map(e=>e.value)}i.submitForm.addEventListener("submit",l);function l(e){console.log(n),console.log(t),e.preventDefault(),new Promise((o,a)=>{setTimeout(()=>{n.includes("fulfilled")?o(`✅ Fulfilled promise in ${t}ms`):n.includes("rejected")&&a(`❌ Rejected promise in ${t}ms`)},t)}).then(o=>{s.show({message:o,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}).catch(o=>{s.show({message:o,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map
