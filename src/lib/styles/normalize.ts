function setNormalizeCss() {
	let response = '';

	// html
	response += `html {\n`;
	response += `line-height: 1.5;\n`;
	response += `font-size: 1rem;\n`;
	response += `overflow-x: hidden;\n`;
	response += '}\n';

	response += `html {\n`;
	response += `box-sizing: border-box;\n`;
	// response += `overflow-y: scroll;\n`;
	response += `word-break: normal;\n`;
	response += `tab-size: 4;\n`;
	response += '}\n';

	// body
	response += `body {\n`;
	response += `margin: 0;\n`;
	response += '}\n';

	// *
	response += `* {\n`;
	response += `padding: 0;\n`;
	response += `margin: 0;\n`;
	response += '}\n';

	// before & after
	response += `::before, ::after {\n`;
	response += `text-decoration: inherit;\n`;
	response += `vertical-align: inherit;\n`;
	response += '}\n';

	response += `*, ::before, ::after {\n`;
	response += `background-repeat: no-repeat;\n`;
	response += `box-sizing: inherit;\n`;
	response += '}\n';

	response += `.fill-height {\n`;
	response += `height: 100% !important;\n`;
	response += '}\n';

	response += `img, video {\n`;
	response += ` max-width: 100%;\n`;
	response += ` height: auto;\n`;
	response += '}\n';

	response += `img, svg, video, canvas, audio, iframe, embed, object {\n`;
	response += ` display: block;\n`;
	response += ` vertical-align: middle;\n`;
	response += '}\n';

	response += `.no-scroll {\n`;
	response += ` height: 100%;\n`;
	response += ` overflow: hidden;\n`;
	response += '}\n';

	return response;
}

export default setNormalizeCss;
