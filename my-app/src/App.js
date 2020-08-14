import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './views/Contact';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <React.Fragment>
      <Router>
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Switch> */}
          <Switch>
            <Route exact path="/" component={Home} />
      
            <Route path="/contact" component={Contact} />

            <Route path="/about" component={About} />

          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
