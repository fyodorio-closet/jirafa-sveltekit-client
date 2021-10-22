/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface User {
	username: string;
}

export interface Project {
	name: string;
	owner: User;
}