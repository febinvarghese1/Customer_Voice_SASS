const sidebar = document.querySelector(".header__sidebar_menu");
const sidebar_list = document.getElementById("toggle");
sidebar.addEventListener("click", ()=>{
    sidebar_list.classList.toggle("header__sidebar_list_active");
})