import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Create from './components/CreateMeetup';
import SingleMeetup from './components/SingleMeetup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { render } from '@testing-library/react';
import blogs from './components/Posts';
import SignupForm from './components/SignupForm';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className=""> */}
        <AppNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <SingleMeetup />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="*">
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider >
  );
};



export default App;