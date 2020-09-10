let mobileButton = $('.toggle-button');
let mobileNav = $('.main-nav');
let target = document.querySelector('.changeTarget');
let element = document.querySelectorAll('.element-transition');
let elementsPos = [];
function changeHeader() {
	let header = $('.main-header');
	let navLinks = $('.nav-link');
	let mobileBtnBar = $('.toggle-button__bar');
	let logo = $('.logo');
	let scrPos = window.innerHeight;
	let targetPos = target.getBoundingClientRect().top / 0.1;

	if (targetPos < scrPos) {
		header.addClass('header-change');
		logo.addClass('logo__text-change');
		mobileBtnBar.addClass('button-change');
		navLinks.addClass('nav-link__change');
	}
	if (header.hasClass('header-change') && targetPos > scrPos) {
		header.removeClass('header-change');
	}
	if (logo.hasClass('logo__text-change') && targetPos > scrPos) {
		logo.removeClass('logo__text-change');
	}
	if (mobileBtnBar.hasClass('button-change') && targetPos > scrPos) {
		mobileBtnBar.removeClass('button-change');
	}
	if (navLinks.hasClass('nav-link__change') && targetPos > scrPos) {
		navLinks.removeClass('nav-link__change');
	}
}
function appearElement() {
	let scrPos = window.innerHeight;
	for (let i = 0; i < element.length; i++) {
		elementsPos.push(element[i].getBoundingClientRect().top / 0.8);
	}
	for (let j = 0; j < element.length; j++) {
		// console.log('element:' + elementsPos[j]);
		// console.log('scrpos: ' + scrPos);
		if (elementsPos[j] < scrPos) {
			element[j].classList.add('element-appear');
			// console.log('ELEMENTO ESTÁ NA POSIÇÃO');
		}
	}
	elementsPos = [];
}
mobileButton.click(function() {
	//mobile nav toggle
	mobileNav.toggleClass('nav-toggle');
});
if (target) {
	//check if target exists, if so, exec changeHeader color
	document.addEventListener('scroll', changeHeader);
}
if (element) {
	document.addEventListener('scroll', appearElement);
}
