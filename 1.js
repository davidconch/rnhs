const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
	link.addEventListener('click', function(event) {
		 
		event.preventDefault();

	 
		navLinks.forEach(link => link.classList.remove('active'));
 
		this.classList.add('active');

		 
		const href = this.getAttribute('href');

		 
		const target = document.querySelector(href);
		target.scrollIntoView({ behavior: 'smooth' });
	});
});
