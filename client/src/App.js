import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import CreateMeetup from './components/CreateMeetup';
import SingleMeetup from './components/SingleMeetup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
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
        <div className="">
          <AppNavbar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/create" component={CreateMeetup}/>
              <Route exact path="/singleMeetup/:id" component={SingleMeetup}/>
              <Route path="/signup">
                <SignupForm />
              </Route>
              <Route path="*">
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider >
  );
};



export default App;