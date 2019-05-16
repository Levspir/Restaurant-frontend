import React, { Component } from "react";

import axios from "../../axios-orders";
class Orders extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("https://restaurant-2484c.firebaseio.com/order.json")
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    return <div>Kuku</div>;
  }
  
}




export default Orders;
