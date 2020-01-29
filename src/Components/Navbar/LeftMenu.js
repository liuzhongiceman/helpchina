import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <SubMenu title={<span>我们需要帮助</span>}>
          <MenuItemGroup title="衣食住行">
            <Menu.Item key="setting:1">出行</Menu.Item>
            <Menu.Item key="setting:2">住宿</Menu.Item>
            <Menu.Item key="setting:3">饮食</Menu.Item>
            <Menu.Item key="setting:4">衣物</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="防疫物品">
            <Menu.Item key="setting:5">口罩</Menu.Item>
            <Menu.Item key="setting:6">消毒水</Menu.Item>
            <Menu.Item key="setting:7">护目镜</Menu.Item>
            <Menu.Item key="setting:8">其他</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="信息咨询">
            <Menu.Item key="setting:9">咨询</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="其他">
            <Menu.Item key="setting:10">其他</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>我们可以帮助</span>}>
          <MenuItemGroup title="衣食住行">
            <Menu.Item key="setting:1">出行</Menu.Item>
            <Menu.Item key="setting:2">住宿</Menu.Item>
            <Menu.Item key="setting:3">饮食</Menu.Item>
            <Menu.Item key="setting:4">衣物</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="防疫物品">
            <Menu.Item key="setting:5">口罩</Menu.Item>
            <Menu.Item key="setting:6">消毒水</Menu.Item>
            <Menu.Item key="setting:7">护目镜</Menu.Item>
            <Menu.Item key="setting:8">其他</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="信息咨询">
            <Menu.Item key="setting:9">咨询</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="其他">
            <Menu.Item key="setting:10">其他</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="support_them">
          <a href="">资助平台</a>
        </Menu.Item>
        <Menu.Item key="contatc_us">
          <Link to="/contactUs">联系我们</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
