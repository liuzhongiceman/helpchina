import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Projects</Link>
        </Menu.Item>
        <Menu.Item key="social_media">
          <Link to="/social_media">Social Media</Link>
        </Menu.Item>
        <Menu.Item key="about_me">
          <Link to="/about_me">About Me</Link>
        </Menu.Item>
        <Menu.Item key="contatc_me">
          <Link to="/contatc_me">Contact Me</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
