import React from "react";
import { connect } from "react-redux";
// import { Form, Icon, Input, Button, Checkbox, Modal } from "antd";
import { Form, Icon, Input, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import md5 from "blueimp-md5";
import { login } from "../../api/person";
import action from "../../store/action/index";

const FormItem = Form.Item;

function loginFail() {
  const modal = Modal.error({
    title: "登录失败",
    content: "请稍后重新尝试!"
  });
  setTimeout(() => modal.destroy(), 2000);
}

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  // 登录操作
  handleSubmit = e => {
    e.preventDefault(); // 阻止提交默认表单

    // 表单验证
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { userName, userPass } = values; // 获取用户名和密码

        // 请求登录接口
        const result = await login({
          name: userName,
          password: md5(userPass) // 加密密码
        });

        // 登录成功
        if (parseFloat(result.code) === 0) {
          this.props.queryBaseInfo(); // 请求获取用户基本信息
          // 登录成功后我们需要重新获取已购买的课程信息（未登录下从服务获取的支付课程信息是获取不到的，但是登录后我们需要把购买信息同步到REDUX中，这样在我的课程中才能展示出来相关的信息）
          this.props.queryPay(); // 请求获取付费课程
          this.props.history.go(-1); // 返回到个人中心
          return;
        }
        loginFail(); // 登录失败
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="personLoginBox">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]
            })(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("userPass", {
              rules: [
                {
                  required: true,
                  message: "请输入密码"
                }
              ]
            })(
              <Input
                prefix={<Icon type="lock" />}
                placeholder="密码"
                type="password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            &nbsp; <Link to="/person/register">马上注册</Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(
  connect(
    null,
    { ...action.person, ...action.course }
  )(Login)
);
