import { Card, Form, Input, Button } from "antd";

import logo from "../../assets/logo.png";
import "./index.css";

type FieldType = {
  username?: string;
  password?: string;
};
function onFinish() {
  console.log("success");
}

export default function Login() {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} />
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "请输入正确的手机号",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
