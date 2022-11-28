document.addEventListener('DOMContentLoaded', function () {
	const navigation = document.querySelector('.navbar');
	function addShadow() {
		if (window.scrollY >= 150) {
			navigation.classList.add('shadow-bg');
		} else {
			navigation.classList.remove('shadow-bg');
		}
	}
	window.addEventListener('scroll', addShadow);
	const Collapse = document.querySelector('.navbar-collapse');
	const navbarLinks = document.querySelectorAll('.nav-link');
	navbarLinks.forEach((link) =>
		link.addEventListener('click', () => Collapse.classList.remove('show'))
	);
});
