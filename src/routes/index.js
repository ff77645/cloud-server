import { Hono } from "hono";
import authRoute from "./auth";

const router = new Hono();

router.route('/auth',authRoute)

export default router