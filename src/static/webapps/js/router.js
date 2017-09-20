import React from 'react'
import { Router, IndexRoute, Route, Redirect } from 'react-router'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    console.info("路由")
    return (
			<Router>
        <Route
          path="/"
          getComponent={
            (nextState, callback) => {
              require.ensure([], function (require) {
                callback(null, require('./views/home/main').default)
              }, 'home')
            }
          }
        >
        </Route>
 				<Route path="detail" 
 				 	getComponent={
 				 		(nextState, callback) => {
	            require.ensure([], function (require) {
	              callback(null, require('./views/home/main').default)
	            },'detail')
          	}
        	}
        >
        </Route>
        <Route path="*" getComponent={(nextState, callback) => {
            require.ensure([], function (require) {
              callback(null, require('./views/home/main').default)
            })
          }}>
        </Route>

      </Router>)
  }
}

export default App
