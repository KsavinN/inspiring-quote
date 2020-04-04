import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";

const URL_SERVER = "https://radiant-sea-73035.herokuapp.com/";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:URL_SERVER
  }),
  queryDeduplication:false
  
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
     </ApolloProvider> 
  </React.StrictMode>,
  rootElement
);
