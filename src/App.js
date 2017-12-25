import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./components/homePage/homePage.component";
import SpecsListing from "./components/specsListing/specsListing.component";
import SpecsDetail from "./components/specsDetail/specsDetail.component";
import './assets/App.css';
import './assets/common/common.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/*<Header />*/}
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/list" component={SpecsListing}/>
              <Route path="/detail" component={SpecsDetail}/>
            </Switch>
            {/*<Footer />*/}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
