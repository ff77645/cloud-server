import { Layout } from '../components/Layout'

const List = (props) => (
  <li>
    <a href={`/post/${props.post.id}`}>{props.post.title}</a>
  </li>
)

export default function Top(props){

  return (
    <Layout title={'Top'}>
      <main>
        <h2 style={{
          color:'red',
          cursor:'pointer',
        }}>Posts</h2>
        <ul>
        </ul>
      </main>
      <script src="/static/js/test.js"></script>
      <script src="/static/file/index-e73a464e.js"></script>
    </Layout>
  )
}