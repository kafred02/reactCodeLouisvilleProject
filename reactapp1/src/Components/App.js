import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import API from './API';
import PokeAPI from './PokeAPI';
// import Teachers from './Teachers';
// import Courses from './Courses';
// import NotFound from './NotFound';
// import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route path="/api" render={ () => <API title='API' /> } />
        <Route path="/PokeAPI" render={ () => <PokeAPI title='TestAPI' /> } />
        {/* <Route exact path="/teachers" component={Teachers} /> */}
        {/* <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




