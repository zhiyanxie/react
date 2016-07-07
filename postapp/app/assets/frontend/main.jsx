import PostBox from './components/PostBox';
import PostList from './components/PostList';

let mockPosts = [
  {id:1, name:"Peter1", body: "hello this is my 1post"},
  {id:2,  name:"Peter2", body: "hello this is my 2post"},
  {id:3,  name:"Peter3", body: "hello this is my3 post"}
]
class Main extends React.Component {
  render(){
    return (
      <div>
        <PostBox />
        <PostList posts={mockPosts}/>
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
