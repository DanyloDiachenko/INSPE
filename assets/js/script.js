$(document).ready(function () {
	$("#slider").slick({
		arrows: true,
		slidesToShow: 1,
		prevArrow: $("#prev-arrow"),
		nextArrow: $("#next-arrow"),
	});
});

document.querySelector("#menu").addEventListener("click", () => {
	document.querySelector(".menu-content").classList.toggle("active");
});