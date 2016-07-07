import Post from "./Post"
export default class PostList extends React.Component {
  render() {
    console.log(this.props);
    let posts = this.props.posts.map(post=><Post key={post.id} {...post}/>)
    return (
      <div>
        <ul className="collection">
          {posts}
        </ul>
      </div>

    )
  }
}
