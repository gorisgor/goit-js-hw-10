import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n}from"./assets/vendor-77e16229.js";const i={delayInput:document.querySelector("input[name='delay']"),checkboxState:document.querySelectorAll("input[name='state']"),submitForm:document.querySelector(".form")};let s=0;i.delayInput.addEventListener("change",()=>{s=i.delayInput.value});let r=[];const a=Array.from(i.checkboxState);a.forEach(e=>{e.addEventListener("change",d)});function d(){r=a.filter(e=>e.checked).map(e=>e.value)}i.submitForm.addEventListener("submit",m);function m(e){e.preventDefault(),i.delayInput.value="",a.forEach(t=>{t.checked=!1});let l="",o=0;r.includes("fulfilled")?(l="fulfilled",o=s):r.includes("rejected")&&(l="rejected",o=s),new Promise((t,c)=>{setTimeout(()=>{l==="fulfilled"?t(`✅ Fulfilled promise in ${o}ms`):l==="rejected"&&c(`❌ Rejected promise in ${o}ms`)},o)}).then(t=>{n.show({message:t,messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight"})}).catch(t=>{n.show({message:t,messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})})}
//# sourceMappingURL=commonHelpers2.js.map
