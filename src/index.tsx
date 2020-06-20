import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  renderMethod(
    <AppContainer>
      <App />
    </AppContainer>,
    target
  );
}
