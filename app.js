
const centerBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

window.addEventListener("DOMContentLoaded",()=>{
	overlay.classList.remove("open-modal");
})

centerBtn.addEventListener("click", ()=>{
	overlay.classList.add("open-modal");

})

closeBtn.addEventListener("click", ()=>{
	overlay.classList.remove("open-modal");
})