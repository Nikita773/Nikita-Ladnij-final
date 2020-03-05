"use strict";

var main = document.querySelector(".gallery-photos__main-thumbnail img");
var gallery = document.querySelector(".gallery-photos__thumbnail");
var thumbnail = document.querySelectorAll(".gallery-photos__thumbnail a");
gallery.addEventListener("click",function(e){
	main.src = e.target.previousElementSibling.src;
	for(var i=0;i<thumbnail.length;i++){
		if(thumbnail[i].classList.contains("active")){
			thumbnail[i].classList.remove("active");
		}
		e.target.parentElement.classList.add('active');
	}
	e.preventDefault(); 
});

var size = document.querySelector(".gallery-info__links_size");
var color = document.querySelector(".gallery-info__links_color");
var size_links = document.querySelectorAll(".gallery-info__links_size .gallery-info__link");
var color_links = document.querySelectorAll(".gallery-info__links_color .gallery-info__link");
size.addEventListener("click", function(e){
	for(var i=0;i<size_links.length;i++){
		if(e.target.classList.contains("gallery-info__link")){
			if(size_links[i].classList.contains("active")){
				size_links[i].classList.remove("active");
			}
			e.target.classList.add('active');
		}
	}
	e.preventDefault(); 
});
color.addEventListener("click", function(e){
	for(var i=0;i<color_links.length;i++){
		if(e.target.classList.contains("gallery-info__link")){
			if(color_links[i].classList.contains("active")){
				color_links[i].classList.remove("active");
			}
			e.target.classList.add('active');
		}
	}
	e.preventDefault(); 
});

let cart = document.querySelector(".gallery-info__btn a");
cart.addEventListener("click", function(e){
	e.preventDefault();
	cartNumbers();
});

function cartNumbers(){
	let productNumbers = localStorage.getItem("cartNumbers");
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector(".cart-price").textContent = productNumbers + 1; 
	}
	else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector(".cart-price").textContent = 1; 
	}

}

function onloadCartNumbers(){
	let productNumbers = localStorage.getItem("cartNumbers");
	if(productNumbers){
		document.querySelector(".cart-price").textContent = productNumbers; 
	}
}

onloadCartNumbers();

this.cart =  (localStorage.cart) ? JSON.parse(localStorage.cart) : {};