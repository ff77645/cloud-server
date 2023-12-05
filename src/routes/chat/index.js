import { Hono } from "hono";
import Chat from "../../pages/Chat";

const chat = new Hono();

chat.post('/release',async c=>{
  const path = c.req.query('path')
  if(!path){
    return new Response('path is required',{status:400})
  }
  const body = await c.req.arrayBuffer()
  await c.env.storage.put(path,body)
  return c.json({
    success:true,
    msg:'success',
  })
})


export default chat