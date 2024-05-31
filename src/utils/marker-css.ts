export function formatCSSMarkers(
	css: string,
	startMarker: string,
	endMarker: string
): { extracted: string; cleaned: string } {
	const startMarkerLength = startMarker.length;
	const endMarkerLength = endMarker.length;

	let startIndex = 0;
	let endIndex = 0;
	let extractedContent = '';
	let cleanedCSS = '';
	let lastEndIndex = 0;

	while ((startIndex = css.indexOf(startMarker, endIndex)) !== -1) {
		endIndex = css.indexOf(endMarker, startIndex + startMarkerLength);
		if (endIndex !== -1) {
			extractedContent += css.substring(startIndex + startMarkerLength, endIndex).trim() + '\n';
			cleanedCSS += css.substring(lastEndIndex, startIndex);
			lastEndIndex = endIndex + endMarkerLength;
		} else {
			break;
		}
	}

	cleanedCSS += css.substring(lastEndIndex);

	return {
		extracted: extractedContent.trim(),
		cleaned: cleanedCSS.trim()
	};
}
