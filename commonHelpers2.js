import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const t={form:document.querySelector(".form"),submitBtn:document.querySelector('button[type="submit"]')};t.submitBtn.addEventListener("click",n);function n(i){i.preventDefault();const o=t.form.elements.delay.value,s=t.form.elements.state.value;new Promise((e,m)=>{s==="fulfilled"?setTimeout(()=>e(o),o):s==="rejected"&&setTimeout(()=>m(o),o)}).then(e=>{r.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#59a10d",position:"topCenter",progressBar:!1})},e=>{r.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"#fff",backgroundColor:"#b52222",position:"topCenter",progressBar:!1})}),t.form.reset()}
//# sourceMappingURL=commonHelpers2.js.map
