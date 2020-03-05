"use strict";

var menu = document.querySelector(".header__menu");
var burger = document.querySelector(".header__burger");
burger.addEventListener("click",function(){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});
