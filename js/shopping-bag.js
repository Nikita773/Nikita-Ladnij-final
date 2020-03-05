"use strict";

let item = document.querySelectorAll('.bag__item');
let remove = document.querySelectorAll('.bag__remove');
let empty = document.querySelector('.checkout__empty');

for(let i=0;i<item.length;i++){
	remove[i].addEventListener("click", function(e) {
		e.preventDefault(); 
		e.target.parentElement.parentElement.style.display = 'none';
	});
}
empty.addEventListener("click",function(){
	document.querySelector('.bag__list').innerText = 'Your cart is empty!';
	document.querySelector('.bag__list').classList.add('empty');
	document.querySelector('.bag-cost').innerText = '';
	document.querySelector('.bag-amount').innerText = '0';
})