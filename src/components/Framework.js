import React from "react";
export default function Framework({ name,type }) {
  return (<blockquote>
          Check this - <h1> {name}</h1>
      <footer>{type}-Framework</footer>
  </blockquote>);
}
