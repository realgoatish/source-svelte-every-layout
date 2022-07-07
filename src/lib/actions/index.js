/**
 * If user is using a touch interface, add a 'touch' class to the body tag
 * @param {HTMLElement} node
 */
export function detectTouch(node) {
	window.addEventListener(
		'touchstart',
		function touched() {
			document.body.classList.add('touch');
			window.removeEventListener('touchstart', touched, false);
		},
		false
	);
}
