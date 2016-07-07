import PostBox from './components/PostBox';
import PostList from './components/PostList';

let mockPosts = [
  {id:1, name:"Peter1", body: "hello this is my 1post"},
  {id:2,  name:"Peter2", body: "hello this is my 2post"},
  {id:3,  name:"Peter3", body: "hello this is my3 post"}
]
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {postsList: mockPosts};
  }
  addPost(postToAdd){
    let newPostsList = this.state.postsList;
    console.log(newPostsList);
    newPostsList.unshift({id:Date.now(), name: 'Guest', body:postToAdd})

    this.setState({postsList:newPostsList});
  }
  render(){
    return (
      <div>
        <PostBox sendPost={this.addPost.bind(this)}/>
        <PostList posts={this.state.postsList}/>
      </div>
    );
  }
}
let documentReady = () =>{
  ReactDOM.render(
      <Main />,
      document.getElementById('react')
  );
};
$(documentReady);
