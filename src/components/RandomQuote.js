import React from "react";
import { gql, useQuery } from "@apollo/client";
import  Quote  from "./Quote";


const RANDOM_QUOTE_QUERY = gql`
  query getRadnomQuote {
    randomQuote {
      text
      author
    }
  }
`;

export default function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (error) => {
      console.error("error", error);
    },
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });
  if (loading) {
    return (<h1>"Quote is Loading ..."</h1>);
  }
  if (error) {
    return (<h1>"Something goes wrong ..."</h1>);
  }
  const { text, author } = data.randomQuote;
  return (<>
    <Quote text={text} author={author} />
    <button onClick={() => { refetch(); }}>New Quote</button>
  </>);
}

