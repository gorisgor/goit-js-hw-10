import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const o={delayInput:document.querySelector("input[name='delay']"),checkboxState:document.querySelectorAll("input[name='state']"),submitForm:document.querySelector(".form")};let n=0;o.delayInput.addEventListener("change",()=>{n=o.delayInput.value});let a=[];const i=Array.from(o.checkboxState);i.forEach(e=>{e.addEventListener("change",c)});function c(){a=i.filter(e=>e.checked).map(e=>e.value)}o.submitForm.addEventListener("submit",l);function l(e){e.preventDefault(),o.delayInput.value="",i.forEach(t=>{t.checked=!1}),new Promise((t,s)=>{setTimeout(()=>{a.includes("fulfilled")?t(`✅ Fulfilled promise in ${n}ms`):a.includes("rejected")&&s(`❌ Rejected promise in ${n}ms`)},n)}).then(t=>{o.delayInput.value="",r.show({message:t,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}).catch(t=>{r.show({message:t,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map
