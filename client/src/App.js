import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/CreateMeetup';
import BlogDetails from './components/SingleMeetup';
import NotFound from './components/404';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;