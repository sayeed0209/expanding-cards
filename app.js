const panels = document.querySelectorAll('.panel');
panels.forEach(el => {
	el.addEventListener('click', () => {
		removeActiveClass();
		el.classList.add('active');
	});
});

function removeActiveClass() {
	panels.forEach(el => {
		el.classList.remove('active');
	});
}
