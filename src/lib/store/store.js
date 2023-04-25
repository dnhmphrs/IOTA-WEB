import { writable } from 'svelte/store';

export const screenType = writable(null);
export const darkMode = writable(false);
export const isIframe = writable(false);
