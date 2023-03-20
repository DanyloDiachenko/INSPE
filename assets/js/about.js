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