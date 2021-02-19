import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component{
  handleClick=()=>{
    this.forceUpdate();
  }
  handleColorChange=()=>{
    var x=document.getElementById("demo");
    ReactDOM.findDOMNode(x).style.backgroundColor="red";
  }
  render(){
    return(
      <div>
        <h1>{Math.random()}</h1>
        <button onClick={this.handleClick}>click to change the number</button>
        <h1 id="demo">API</h1>
        <button onClick={this.handleColorChange}>click</button>
      </div>
    );
  }
}
export default App;