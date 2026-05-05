// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');
	
	if (hamburger) {
		hamburger.addEventListener('click', function() {
			navLinks.classList.toggle('active');
			hamburger.classList.toggle('active');
		});
		
		// Close menu when a link is clicked
		const links = navLinks.querySelectorAll('a');
		links.forEach(link => {
			link.addEventListener('click', function() {
				navLinks.classList.remove('active');
				hamburger.classList.remove('active');
			});
		});
	}
});
