import React from "react";
import Framework from "./Framework";
import { useQuery, gql } from "@apollo/client";


const GET_FRAMEWORK = gql`
  query getRadnomFramework {
    randomFramework{
      name
      type
    }
  }
`;

export default function RandomFramework() {
  const { data, loading, error, refetch } = useQuery(GET_FRAMEWORK);
  if (loading) {
    return <h1>"loading ..."</h1>;
  }
  if (error) {
    return <h1>"SomeThings go wrong!"</h1>;
  }
  const { name,type } = data.randomFramework;
  return (<>
    <Framework name={name} type={type}  />
    <button onClick={() => refetch()}>Get another Framework</button>
  </>);
}
