import { Layout } from '../components/Layout'

const List = (props) => (
  <li>
    <a href={`/post/${props.post.id}`}>{props.post.title}</a>
  </li>
)

export const Top = (props) => {

  return (
    <Layout title={'Top'}>
      <main>
        <h2 style={{
          color:'red',
          cursor:'pointer',
        }}>Posts</h2>
        <ul>
          {props.posts.map((post) => (
            <List post={post} />
          ))}
        </ul>
      </main>
      <script src="/static/js/test.js"></script>
    </Layout>
  )
}