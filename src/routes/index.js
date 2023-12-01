import { Hono } from "hono";
import authRoute from "./auth";
import chatRoute from './chat'

const router = new Hono();

router.route('/auth',authRoute)
router.route('/chat',chatRoute) 

export default router