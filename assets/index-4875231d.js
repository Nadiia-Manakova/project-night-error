(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const s=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};e.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const c=new IntersectionObserver(t=>{t.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show-title"):e.target.classList.remove("show-title")})}),i=document.querySelectorAll(".hidden-title");i.forEach(t=>c.observe(t));const d=new IntersectionObserver(t=>{t.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show-button"):e.target.classList.remove("show-button")})}),a=document.querySelectorAll(".hidden-button");a.forEach(t=>d.observe(t));$(".autoplay").slick({dots:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0,dotsClass:"my-dots",autoplay:!0,autoplaySpeed:2e3,nextArrow:'<button type="button" class="slick-next"><img src="./right.png" alt="next"></button>',prevArrow:'<button type="button" class="slick-prev"><img src="./left.png" alt="prev"></button>'});const u=new IntersectionObserver(t=>{t.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show-services-card"):e.target.classList.remove("show-services-card")})}),m=document.querySelectorAll(".hidden-services-card");m.forEach(t=>u.observe(t));(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),inputEmail:document.querySelector("#user-email"),formEl:document.querySelector("#rent-form")};t.closeModalBtn.addEventListener("click",n),t.formEl.addEventListener("submit",e);function e(r){r.preventDefault(),console.log("test"),t.modal.classList.toggle("is-hidden"),r.currentTarget.reset()}function n(){t.modal.classList.toggle("is-hidden")}})();$(".auto").slick({dots:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0,dotsClass:"my-dots",autoplay:!0,autoplaySpeed:2e3});