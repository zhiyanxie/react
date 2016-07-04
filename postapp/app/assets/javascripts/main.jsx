class Main extends React.Component {
  render(){
    return (
      <h2>Hello from the component</h2>
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
