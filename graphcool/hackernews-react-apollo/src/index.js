import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// 1. add Apollo
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// 2. point Apollo @ the uri for the server
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj51pv1b9cx3n0175skb5ukjt'
});

// 3. create the Apollo Client
const client = new ApolloClient({
  networkInterface
})

// 4. turn the app into an Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));

// 5. Register the service worker
registerServiceWorker();
