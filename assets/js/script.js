$(document).ready(function () {
	$("#slider").slick({
		arrows: true,
		slidesToShow: 1,
		prevArrow: $("#prev-arrow"),
		nextArrow: $("#next-arrow"),
	});
});


$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: $("#prev-arrow"),
	nextArrow: $("#next-arrow"),
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 3,
			}
		}
	]
});

document.querySelector("#menu").addEventListener("click", () => {
	document.querySelector(".menu-content").classList.toggle("active");
});

document.querySelector("#btn-team-member").addEventListener("click", () => {
	console.log("click");
	document.querySelector(".member-wrapper").classList.toggle("active");
	document.querySelector(".facebook").classList.toggle("active");
	document.querySelector(".linkedin").classList.toggle("active");
	document.querySelector(".btn-description").classList.toggle("active");
});

const textarea = document.querySelector("#textarea");
textarea.addEventListener("input", () => {
	textarea.style.height = "auto";
	textarea.style.height = `${textarea.scrollHeight + 15}px`;
});