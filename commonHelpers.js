import{a,i as c,S as u}from"./assets/vendor-9fe73975.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="https://api.thecatapi.com/v1";a.defaults.headers.common["x-api-key"]="live_n4VWIaVJ8MEwjf6Kd5BbI1T5MOpXlUsfsYzkr7ScX1gYNGyuofj3slrEniHrovtb";async function p(){return await a.get(`${d}/breeds`)}async function f(o){return await a.get(`${d}/images/search?breed_ids=${o}`)}const r={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),list:document.querySelector(".cat-info"),error:document.querySelector(".error")};function h(o){return o.map(({id:s,name:i})=>`<option value="${s}">${i}</option>`).join("")}function m(){r.loader.classList.remove("hide"),r.error.classList.add("hide"),p().then(({data:o})=>{r.select.innerHTML=h(o),new u({select:r.select})}).catch(o=>{c.show({title:"Hey",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",progressBarColor:"red"})}).finally(()=>{r.loader.classList.add("hide"),r.select.classList.remove("hide")})}m();r.select.addEventListener("change",y);function y(o){r.loader.classList.remove("hide"),f(o.target.value).then(({data:s})=>{r.list.innerHTML="",r.loader.classList.remove("hide");let{name:i,description:n,temperament:e}=s[0].breeds[0],{url:t}=s[0];r.list.innerHTML=g({name:i,description:n,temperament:e,url:t})}).catch(s=>{r.list.innerHTML="",c.show({title:"Hey",message:"FAILED FETCH API!",position:"topRight",progressBarColor:"red"})}).finally(()=>{r.loader.classList.add("hide")})}function g({name:o,description:s,temperament:i,url:n}){return`
    <img src="${n}" alt="${o}" style="width: 1240px" />
    <div style="width: 1240px">
    <h2>${o}</h2>
    <p>${s}</p>
    <p><span>Temperament:</span> ${i}</p>
    </div >`}
//# sourceMappingURL=commonHelpers.js.map
