import { Hono } from "hono";
const auth = new Hono();


auth.get('/login',c=>{
  return c.text('login')
})


auth.get('/register',c=>{
  return c.text('register')
})


export default auth
