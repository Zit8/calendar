import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Navigate from "./Navigate";
import "./config/firebase";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://192.168.1.5:3001";
export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}
