import React from "react";
import Greet from "./components/Greet";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Greet id="greet" />
      <Message id="message" />
    </div>
  );
}

export default App;
