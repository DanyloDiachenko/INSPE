document.querySelector("#menu").addEventListener("click", () => {
	document.querySelector(".menu-content").classList.toggle("active");
});

const textarea = document.querySelector("#textarea");

textarea.addEventListener("input", () => {
	textarea.style.height = "auto";
	textarea.style.height = `${textarea.scrollHeight + 15}px`;
});