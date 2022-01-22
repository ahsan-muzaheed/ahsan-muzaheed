
/*=====================================
		Theme START
=======================================*/

window.onload = () => {
	if(localStorage.getItem("theme") === "dark"){
		document.getElementsByTagName("footer")[0].classList.toggle("dark-footer");
		document.getElementsByTagName("header")[0].classList.toggle("dark-header");
		document.getElementsByTagName("main")[0].classList.toggle("dark-body");
		let theme_toggle = document.getElementById("theme-toggle");
		theme_toggle.src = "./images/moon.png";
	}

	document.getElementById("nav-toggle").addEventListener("click", () => {
		let nav_toggle = document.getElementById("nav-toggle");
		nav_toggle.src = nav_toggle.src.endsWith("/images/unhide.png") ? "./images/hide.png" : "./images/unhide.png";
		document.querySelectorAll(".nav-item").forEach(
			(elem) => {
				elem.style.display = nav_toggle.src.endsWith("/images/unhide.png") ? "block" : "none";
			}
		);
	});

	document.getElementById("theme-toggle").addEventListener("click", () => {
		let theme_toggle = document.getElementById("theme-toggle");
		theme_toggle.src = theme_toggle.src.endsWith("/images/sun.svg") ? "./images/moon.png" : "./images/sun.svg";
		if(theme_toggle.src.endsWith("/images/sun.svg")){
			localStorage.setItem("theme", "light");
		} else {
			localStorage.setItem("theme", "dark");
		}
		//if(localStorage.getItem("theme") === "dark"){
			document.getElementsByTagName("footer")[0].classList.toggle("dark-footer");
			document.getElementsByTagName("header")[0].classList.toggle("dark-header");
			document.getElementsByTagName("main")[0].classList.toggle("dark-body");
		//}
	});
}
/*=====================================
		Theme END
=======================================*/
