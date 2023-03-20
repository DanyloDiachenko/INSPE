document.querySelector("#menu").addEventListener("click", () => {
	document.querySelector(".menu-content").classList.toggle("active");
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