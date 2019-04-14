import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Second from './Second';
import First from './First';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home';
import Talks from './Talks';
import Talk from './Talk';
class App extends Component {

  constructor(){
    super();
    this.state = {
      isLogin : false
    }
  }

  render() {
    return (
     <BrowserRouter>
     <div>
<Navigation/>
<Switch>
<Route path="/" exact component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/about" component={About} />
{
(this.state.isLogin?<Route path="/talks" exact component={Talks} />:null )
}
<Route path="/talksi/:id" component={Talk} />
<Route  render={()=><h1>Not found</h1>} />
</Switch>
</div>
     </BrowserRouter>
    );
  }
}

export default App;
