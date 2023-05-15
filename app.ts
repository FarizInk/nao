import { Application, Status, oakCors, config } from "./deps.ts";
import { router } from "./routes.ts";
import { Context } from "./types.ts";

const port = parseInt(config().PORT) || 3000;

const app = new Application<Context>();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

// static content
app.use(async (context, next) => {
  const root = `${Deno.cwd()}/public`;
  try {
    await context.send({ root });
  } catch {
    next();
  }
});

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `"${context.request.url}" not found`;
});

console.log(`Application is running on port ${port}`);
await app.listen({ port });
