export default class PostBox extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="input-field">
            <textarea className="materialize-textarea"/>
            <label>buttom here</label>
            <button classNme="btn right">Post Now</button>
          </div>
        </form>
      </div>
    )
  }
}
