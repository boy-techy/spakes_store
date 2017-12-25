import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/App.css';
import HomePage from "./components/homePage/homePage.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/*<Header />*/}
            <Switch>
              <Route exact path="/" component={HomePage}/>
              {/*<Route path="/list" component={SpakeList}/>*/}
            </Switch>
            {/*<Footer />*/}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
