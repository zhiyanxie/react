export default class PostBox extends React.Component {
  sendPost(){
    event.preventDefault();
    this.props.sendPost(this.refs.postTextArea.value);
    this.refs.postTextArea.value = '';
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.sendPost.bind(this)}>
          <div className="input-field">
            <textarea ref="postTextArea" className="materialize-textarea"/>
            <label>buttom here</label>
            <button type="submit" classNme="btn right">Post Now</button>
          </div>
        </form>
      </div>
    )
  }
}
