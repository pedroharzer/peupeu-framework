let mobileButton = $('.toggle-button');
let mobileNav = $('.main-nav');
let target = document.querySelector('.changeTarget');
function changeHeader() {
	let header = $('.main-header');
	let navLinks = $('.nav-link');
	let mobileBtnBar = $('.toggle-button__bar');
	let logo = $('.logo');
	let scrPos = window.innerHeight;
	let targetPos = target.getBoundingClientRect().top / 0.1;

	if (targetPos < scrPos) {
		console.log('targetPos < scrPos');
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
mobileButton.click(function() {
	//mobile nav toggle
	mobileNav.toggleClass('nav-toggle');
});
if (target) {
	//check if target exists, if so, exec changeHeader color
	document.addEventListener('scroll', changeHeader);
}
