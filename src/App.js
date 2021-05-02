
// function App() {
//   return (
//     <React.Fragment>
//       <Switch>
//         <Route exact path='/' component={Portfolio} />
//         <Route path="/Landing" component={Landing} />
//         <Route path="/Navbar" component={Navbar} />
//         <Route path="/Education" component={Education} />
//         <Route path="/Skills" component={Skills} />
//         <Route path="/Projects" component={Projects} />
//         <Route path="/Contact" component={ContactMe} />
//         <Route component={Landing} />
//       </Switch>
//     </React.Fragment>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Portfolio from './containers/Portfolio/Portfolio';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          theme: 'light',
      };
      this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme = () => {
    console.log("im clicked");
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }
  render() {
    return (
    <React.Fragment>
      <button onClick={e => this.toggleTheme()} className="bts">Switch</button>
      <Switch>
        <Route exact path='/' component={Portfolio} />
        <Route path="/Landing" component={Landing} />
        <Route path="/Navbar" component={Navbar} />
        <Route path="/Education" component={Education} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={ContactMe} />
        <Route component={Landing} />
      </Switch>
    </React.Fragment>
    )
  }
}

