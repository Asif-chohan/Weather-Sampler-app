import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetWeather from "./getweather";
import ChatApp from "./chatapp";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChatApp />
      </Provider>
    </div>
  );
}

export default App;
