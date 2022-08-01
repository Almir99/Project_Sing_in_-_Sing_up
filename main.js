const singUpButton = document.querySelector("#signUp");
const singIpButton = document.querySelector("#signIn");
const container = document.querySelector("#container");

singUpButton.addEventListener("click", () =>{
    container.classList.add("right-panel-active");
})
singIpButton.addEventListener("click", () =>{
    container.classList.remove("right-panel-active");
})
