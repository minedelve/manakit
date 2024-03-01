/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';
import { pathCss } from '../path.js';

import { colorClass, colorRoot } from '../../libs/core/colors/index.js';
import { normalize } from '../../libs/core/normalize/index.js';
import { gridsFlexClass, gridsFlexStaticClass } from '../../libs/core/gridsFlex/index.js';
import { radiusClass } from '../../libs/core/radius/index.js';
import { shadowClass } from '../../libs/core/shadow/index.js';
import { fontsClass, fontsRoot, fontsStaticClass } from '../../libs/core/fonts/index.js';
import { sizingClass } from '$lib/libs/core/sizing/index.js';
import { spacingClass } from '$lib/libs/core/spacing/index.js';
import { layoutClass } from '$lib/libs/core/layout/index.js';
import { gridsClass } from '$lib/libs/core/grids/index.js';
import { floatClass } from '$lib/libs/core/float/index.js';
import { flexClass } from '$lib/libs/core/flex/index.js';

// components
import { drawerResponsiveClass } from '$lib/components/drawer/drawer.style.js';
import { menuResponsiveClass } from '$lib/components/menu/menu.style.js';
import { badgeResponsiveClass } from '$lib/components/badge/badge.style.js';
import { fieldResponsiveClass } from '$lib/components/field/field.style.js';
import { dividerResponsiveClass } from '$lib/components/divider/divider.style.js';
import { btnResponsiveClass } from '$lib/components/btn/btn.style.js';

export const buildCSS = ({
	dark,
	themes,
	responsive
}: {
	dark: boolean;
	themes: any;
	responsive: object;
}) => {
	let cssString = '';

	// root
	cssString += colorRoot({ themes, dark });
	cssString += fontsRoot();
	// class
	cssString += normalize();
	cssString += colorClass({ themes });
	cssString += gridsFlexStaticClass();
	cssString += radiusClass();
	cssString += shadowClass();
	cssString += fontsStaticClass();

	for (const [screen, value] of Object.entries(responsive)) {
		if (screen !== 'none') cssString += `@media screen and (min-width: ${value}) {\n`;

		// class
		cssString += sizingClass({ screen });
		cssString += spacingClass({ screen });
		cssString += layoutClass({ screen });
		cssString += gridsClass({ screen });
		cssString += floatClass({ screen });
		cssString += flexClass({ screen });
		cssString += gridsFlexClass({ screen });
		cssString += fontsClass({ screen });

		// class components
		cssString += drawerResponsiveClass({ screen });
		cssString += menuResponsiveClass({ screen });
		cssString += badgeResponsiveClass({ screen });
		cssString += fieldResponsiveClass({ screen });
		cssString += dividerResponsiveClass({ screen });
		cssString += btnResponsiveClass({ screen });

		if (screen !== 'none') cssString += '}\n\n';
	}

	fs.writeFile(pathCss, cssString);
};
