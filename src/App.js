import React, { Component } from 'react'
import './App.css';
// import Postlist from './components/Postlist';
// import Reactyoutube from './comp onents/Reactyoutube';
// import Markdown from './components/Markdown';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import DynamicRouteComp from './components/routingComps/DynamicRouteComp'
import StaticRouteComp from './components/routingComps/StaticRouteComp'
import NotFound from './components/routingComps/NotFound'




class App extends Component {
  render() {
    const loggedIn = true
    const supportsHistory = 'pushState' in window.history
    return (
      <div className='App'>
        <nav className='navbar navbar-light bg-light'>
          <a className='navbar-brand' href="/">Navbar</a>
        </nav>

        <BrowserRouter forceRefresh={!supportsHistory}>
          <Switch>
            <Route exact path='/about' Component={StaticRouteComp}/>
            <Route path='/posts/:slug' Component={DynamicRouteComp}/>
            <Route Component={NotFound}/>

            <Route exact path='/user' render = {() => (
              loggedIn === true ?(
                <Redirect to='/posts/hello-there' />
              ) : (
                <StaticRouteComp/>
              )
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
