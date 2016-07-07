export default class Post extends React.Component {
  render(){
    return (

            <li className="collection-item avatar">
              <img src="images/yuna.jpg" alt="" classNameName="circle" />
              <span className="title">{this.props.name}</span>
              <p>
                {this.props.body}
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>

    );
  }
}
