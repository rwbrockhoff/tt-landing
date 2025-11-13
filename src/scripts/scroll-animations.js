const observeScrollAnimations = () => {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		return;
	}

	const animatedElements = document.querySelectorAll('.animate-on-scroll');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target;
					const delay = element.getAttribute('data-animation-delay') || '0';

					setTimeout(() => {
						element.classList.add('is-visible');
					}, parseInt(delay));

					observer.unobserve(element);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		}
	);

	animatedElements.forEach((element) => {
		observer.observe(element);
	});
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', observeScrollAnimations);
} else {
	observeScrollAnimations();
}
