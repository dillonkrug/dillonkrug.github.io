/* global window */

function hasScrollLeft (el) {
	do {
		if (el.scrollLeft > 0) {
			return true;
		}
	} while ((el = el.parentElement));
	return false;
}

window.addEventListener('mousewheel', e => {
	e.preventDefault();
	e.stopPropagation();
	if (e.deltaX >= 0) {
		return;
	}
	console.log('wheel', e);
	if (!hasScrollLeft(e.target)) {
		console.log('scrollLeft was', false);
	}
});

