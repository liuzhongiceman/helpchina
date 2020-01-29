import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="sign_in">
          <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item key="sing_up">
          <Link to="/register">注册</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
