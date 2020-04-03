import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inspring Quote</h1>
      <Quote text="To be or not to Be..." author="Hamlet" />
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}
