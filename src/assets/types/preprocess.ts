export interface ManakitVite {
	verif?: {
		version?: boolean | undefined;
		install?: boolean | undefined;
	};
	style?: {
		minimify?: boolean | undefined;
		preprocessor?: 'sass' | undefined;
		colorPalette?: 'manakit' | 'webkit' | string[] | undefined;
	};
}

export interface ContextImporter {
	preprocessor: 'sass' | undefined;
	colorPalette: 'manakit' | 'webkit' | string[];
	minimify: boolean;
}
