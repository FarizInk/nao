import { Router } from "./deps.ts";

// import controller
import { index } from './controllers/mainController.ts';
import { getData } from "./controllers/apiController.ts";

const router: Router = new Router();

router.get("/", index);
const apiPrefix = '/api/';
router.get(apiPrefix + 'data', getData);

export { router };
