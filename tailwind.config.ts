import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { lime: '#ccff00', ink: '#0e1014', panel: '#15171d', line: '#272a33', muted: '#969ba8' }, fontFamily: { display: ['Arial Narrow','Impact','sans-serif'] } } }, plugins: [] };
export default config;
