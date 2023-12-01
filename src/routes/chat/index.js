import { Hono } from "hono";

const chat = new Hono();

chat.post('/release',async c=>{
  // const body = await c.req.parseBody()
  // const formData = await c.req.formData() 
  // const files = body.get('files')
  // const formData = await c.req.arrayBuffer()
  const body = await c.req.raw.formData()
  
  console.log({body});
  return c.text('ok')
})


export default chat