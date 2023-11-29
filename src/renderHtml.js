var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/templates/populated-worker/src/renderHtml.js
function renderHtml(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>D1</title>
        <link rel="stylesheet" type="text/css" href="https://templates.integrations-platform.cfdata.org/styles.css">
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
      </head>
    
      <body>
        <header>
          <img
            src="https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/30e0d3f6-6076-40f8-7abb-8a7676f83c00/public"
          />
          <h1>\u{1F389} Successfully connected cloud-server to D1</h1>
        </header>
        <main>
          <p>Your D1 Database contains the following data:</p>
          <pre><code><span style="color: #0E838F">&gt; </span>SELECT * FROM comments LIMIT 3;<br>${content}</code></pre>
          <small class="blue">
            <a target="_blank" href="https://developers.cloudflare.com/d1/tutorials/build-a-comments-api/">Build a comments API with Workers and D1</a>
          </small>
        </main>
        <div id="app">
        <table>
          <tr v-for="item in data">
            <td>{{item.id}}</td>
            <td>{{item.author}}</td>
            <td>{{item.body}}</td>
            <td>{{item.post_slug}}</td>
          </tr>
        </table>
          <h2>{{message}}</h2>
          <button @click="getData">Get Data</button>
        </id>
      </body>
      <script>
        const { createApp, ref } = Vue
        
        createApp({
          setup() {
            const message = ref('Hello vue!')
            const data = ref([])
            const getData = async ()=>{
              const response = await fetch('/test',{
                headers:{
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              })
              const res = await response.json()
              console.log(res)
              data.value = res
            }
            return {
              message,
              getData,
              data,
            }
          }
        }).mount('#app')
      </script>
    </html>
`;
}
__name(renderHtml, "renderHtml");
export {
  renderHtml as default
};
