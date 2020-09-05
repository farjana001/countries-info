import React from 'react';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Header from './Components/Header/Header';
import Contact from './Components/ContactUs/Contact';
import Population from './Components/Population/Population';


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route exact path='/country/:countryName'>
          <CountryDetails/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/:countryArea'>
          <Population/>
        </Route>
        <Route path='/population'>
          <Population/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;