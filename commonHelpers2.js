import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},s="feedback-form-state",r=document.querySelector(".feedback-form");r.addEventListener("input",o);m();function o(e){const a=e.target.name;t[a]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(t))}function m(){const e=JSON.parse(localStorage.getItem(s));if(!e)return;const{email:a,message:l}=r.elements;a.value=e.email,l.value=e.message,Object.assign(t,e)}r.addEventListener("submit",n);function n(e){if(e.preventDefault(),!t.email.trim()||!t.message.trim()){alert("Fill please all fields");return}console.log(t),e.target.reset(),localStorage.removeItem(s),Object.assign(t,{email:"",message:""})}
//# sourceMappingURL=commonHelpers2.js.map