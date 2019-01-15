/* global window */

function hasScrollLeft (el) {
	do {
		if (el.scrollLeft > 0) {
			return true;
		}
	} while ((el = el.parentElement));
	return false;
}

window.addEventListener('wheel', e => {
	if (e.deltaX >= 0) {
		return;
	}
	// console.log('wheel', e);
	if (!hasScrollLeft(e.target)) {
		e.preventDefault();
		e.stopPropagation();
		// console.log('scrollLeft was', false);
	}
});


