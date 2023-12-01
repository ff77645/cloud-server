import { Hono } from "hono";
import renderHtml from "./renderHtml.js";
import { serveStatic } from 'hono/cloudflare-workers'
import router from './routes'
import Top from './pages/Top'
import Chat from './pages/Chat'
import {logger} from 'hono/logger'

const isDev = process.env.NODE_ENV === 'development';
const app = new Hono();

if(isDev){
  app.use('*',logger())
}

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

app.get('/chat',c=>{
  return c.render(<Chat></Chat>)
})

app.get('/top',c=>{
  return c.render(<Top></Top>)
})


app.route('/api',router)


export default app;