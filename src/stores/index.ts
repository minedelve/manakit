import { writable } from 'svelte/store';

export const menuState = writable<HTMLElement | null>(null);
