import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './views/Contact';
import Home from './views/Home';
import { About } from './views/About';
import NoMatch from './views/NoMatch';
import { Layout } from './components/Layout';


function App() {
  return (
    <React.Fragment>
      <Layout>
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

              <Route component={NoMatch} />

            </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
