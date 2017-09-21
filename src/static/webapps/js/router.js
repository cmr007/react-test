import React from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory } from 'react-router-dom'
import Home from './views/home/main'
const App = () => (
  <Router history={hashHistory}>
    <Route exact path="/" component={Home}/>
  </Router>
)
export default App