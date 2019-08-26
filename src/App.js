import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layouts
import BaseLayout from './Layouts/BaseLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import mega from './pages/mega';

function App() {
  return (
    <>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/pages/mega" component={mega} />
            <Route component={NotFound} />
          </Switch>
        </BaseLayout>
      </Router>
    </>
  );
}

export default App;