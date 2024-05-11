import { BROWSER } from 'esm-env';

export function eventNoScroll(state: 'active' | 'disable') {
	if (BROWSER) {
		if (state === 'active') document.body.classList.add('no-scroll');
		if (state === 'disable') document.body.classList.remove('no-scroll');
	}
}

export function getElementHtml(children?: HTMLCollection) {
	let scrollChild = 0;
	const response = [];
	if (children) {
		const nbItems = children.length;
		for (let i = 0; i < nbItems; i++) {
			const child = children[i];
			const childRect = child.getBoundingClientRect();

			response.push({
				index: i,
				nbItems: nbItems,
				size: {
					width: childRect?.width,
					height: childRect?.height
				},
				scroll: {
					start: scrollChild,
					middle: scrollChild + childRect?.width / 2,
					end: scrollChild + childRect?.width
				}
			});

			scrollChild = scrollChild + childRect?.width;
		}
	}

	return response;
}
