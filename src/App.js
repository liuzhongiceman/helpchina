import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import CreatePost from "./Components/CreatePosts/create_post";
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
            <Route path="/login" render={routeProps => <Login />} />
            <Route path="/register" render={routeProps => <Register />} />
            <Route path="/createPost" render={routeProps => <CreatePost />} />
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
          ©2020 技术支持：美国东北大学学生刘忠
        </Footer>
      </div>
    );
  }
}

export default App;
