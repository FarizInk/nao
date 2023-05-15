import { Context } from '../types.ts';

export async function index({ response }: Context) {
	const view = await Deno.readTextFile("./public/dist/index.html");
	response.body = view;
}