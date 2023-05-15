import { Context } from "../types.ts";

export function getData({ response }: Context) {
  response.body = {
    data: null,
  };
}
