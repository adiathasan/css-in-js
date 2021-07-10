export function scrollTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function preferedColorScheme() {
	const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

	console.log(isLight);

	if (isLight) return 'light';

	return 'dark';
}
