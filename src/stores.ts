import { writable } from 'svelte/store';

export const token = writable(null);
export const modalSignIn = writable(false);
export const modalCreate = writable(false);