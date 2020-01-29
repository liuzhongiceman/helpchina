import React from "react";
import MessageList from "../MessageList/message_list";
import { Row, Col } from "antd";

export default class Messages extends React.Component {
  render() {
    return (
      <div className="messages">
        <Row className="message-row">
          <Col className="message-col" xs={24} sm={24} md={24} lg={12} xl={12}>
            <p>防疫物品</p>
            <MessageList />
          </Col>
          <Col className="message-col" xs={24} sm={24} md={24} lg={12} xl={12}>
            <p>衣食住行</p>
            <MessageList />
          </Col>
        </Row>
        <Row className="message-row">
          <Col className="message-col" xs={24} sm={24} md={24} lg={12} xl={12}>
            <p>咨询</p>
            <MessageList />
          </Col>
          <Col className="message-col" xs={24} sm={24} md={24} lg={12} xl={12}>
            <p>其他</p>
            <MessageList />
          </Col>
        </Row>
      </div>
    );
  }
}
