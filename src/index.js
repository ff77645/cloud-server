import { Hono } from "hono";
import renderHtml from "./renderHtml.js";
import { serveStatic } from 'hono/cloudflare-workers'
import router from './routes'

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }))

app.get('/',async c =>{
    const stmt = c.env.db.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();
    console.log({results});
    return c.html(renderHtml(JSON.stringify(results, null, 2)));
})

app.post('/alert-tabel',c=>{
  const stmt = c.env.db.prepare('ALTER TABLE comments ADD abc TEXT')
  const res = stmt.run()
  return c.json(res)
})


app.route('/api',router)


export default app;