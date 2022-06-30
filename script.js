const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

const logo = document.querySelector(".logo");

navToggle.addEventListener("click", () => {
	const visibility = primaryNav.getAttribute("data-visible");
	if (visibility === "false") {
		navToggle.setAttribute("aria-expanded", true);
		primaryNav.setAttribute("data-visible", true);
	} else if (visibility === "true") {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

logo.addEventListener("click", () => {
	window.location.href = "https://github.com/BodTa?tab=repositories";
});
