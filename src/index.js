import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>,
  rootElement
);
