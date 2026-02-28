// Mobile menu
const menu = document.querySelector(".menu");
const toggle = document.getElementById("mobile-menu");
if (menu && toggle) {
	toggle.addEventListener("click", () => {
		menu.classList.toggle("active");
	});
}

// Particles (only initialize if the library is available)
if (typeof particlesJS !== "undefined") {
	particlesJS("particles-js", {
		"particles": {
			"number": { "value": 80 },
			"size": { "value": 3 },
			"color": { "value": "#00bfff" },
			"line_linked": { "enable": true, "color": "#00bfff" },
			"move": { "speed": 2 }
		}
	});
}
