import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Orders from "./containers/Orders/Orders";
import OrderBuilder from "./containers/OrderBuilder/OrderBuilder";
class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={OrderBuilder} />
        <Route path="/orders" component={Orders} />
      </Layout>
    );
  }
}

export default App;
