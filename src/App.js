import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/home";
import ContactUs from "./Components/ContactUs/contact_us";

import { Layout } from "antd";
const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <Switch>
            <Route exact path="/" render={routeProps => <Home />} />
            <Route path="/contactUs" render={routeProps => <ContactUs />} />
          </Switch>
        </BrowserRouter>
        <Footer
          style={{
            borderTop: "1px solid #e8e8e8",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            textAlign: "center"
          }}
        >
          ©2020 Powered By Zhong Liu
        </Footer>
      </div>
    );
  }
}

export default App;
