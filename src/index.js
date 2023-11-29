import { Hono } from "hono";
import renderHtml from "./renderHtml.js";
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }))

app.get('/',async c =>{
    const stmt = c.env.db.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();
    console.log({results});
    return c.html(renderHtml(JSON.stringify(results, null, 2)));
})

app.get('/test', async c =>{
    const { db } = c.env;
    const stmt = db.prepare("SELECT * FROM comments");
    const { results } = await stmt.all();
    return c.json(results);
})  

app.get('/page/home',c=>{
  const posts = getPosts()
  return c.html(<Top posts={posts} />)
})

export default app;