import React from "react";

import { Form, Select, Input, Button } from "antd";
const { Option } = Select;
const { TextArea } = Input;

class CreatePost extends React.Component {
  state = {
    title: "",
    category: "",
    contact: "",
    description: "",
    type: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log("value", value);
    this.setState({
      category: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="createPost-page">
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          onSubmit={this.handleSubmit}
          className="createPost"
        >
          <Form.Item label="类型">
            {getFieldDecorator("类型", {
              rules: [{ required: true, message: "请选择发帖类型!" }]
            })(
              <Select
                placeholder="请选择发帖类型"
                onChange={this.handleSelectChange}
              >
                <Option value="needHelp">我需要帮助</Option>
                <Option value="canHelp">我可以帮助</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="标题">
            {getFieldDecorator("标题", {
              rules: [{ required: true, message: "Please input your note!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="类别">
            {getFieldDecorator("类别", {
              rules: [{ required: true, message: "请选择发帖类别!" }]
            })(
              <Select
                placeholder="请选择发帖类别"
                onChange={this.handleSelectChange}
              >
                <Option value="needHelp">出行</Option>
                <Option value="canHelp">防疫物品</Option>
                <Option value="needHelp">衣物</Option>
                <Option value="canHelp">食品</Option>
                <Option value="needHelp">住宿</Option>
                <Option value="canHelp">出行</Option>
                <Option value="needHelp">信息咨询</Option>
                <Option value="canHelp">其他</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="联系方式">
            {getFieldDecorator("联系方式", {
              rules: [
                { required: true, message: "请输入联系方式入电话或者微信!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="发帖描述">
            {getFieldDecorator("描述", {
              rules: [{ required: true, message: "请输入描述!" }]
            })(<TextArea rows={4} />)}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedCreatePost = Form.create({ name: "customized_form_controls" })(
  CreatePost
);

export default WrappedCreatePost;
