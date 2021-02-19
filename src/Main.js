import React,{Component} from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Route,NavLink,HashRouter} from 'react-router-dom';
class Main extends Component{
    render(){
        return(
           <HashRouter>
                <div>
<h1>Main Component</h1>
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Contact}/>
            <Route exact path="/contact" component={Contact}/>
           </HashRouter>
        );
    }
}
export default Main;