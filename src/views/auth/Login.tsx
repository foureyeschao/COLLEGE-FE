import React from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from '@emotion/styled'
import { useApi, useFetch } from 'utils/hooks'
import request from 'utils/request';
import { useAuth } from 'context/auth-context';

export const Login: React.FC = () => {
  const { login, user } = useAuth()
  /*   const apis = useApi()
    const { loading, data } = useFetch(apis.user.getLogin({ userName: 'victorcao', password: '' }))
  
    console.log(loading)
    console.log(data) */

  const handleSubmit = (values: { username: string, password: string }) => {
    login(values);
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >{
        user ? <div>
          Login success! UserName: {user.username}
        </div> : null
      }
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <SubmitButton type="primary" htmlType="submit">
          Log in
        </SubmitButton>
        <Divider />
        <a href=" ">register now!</a>
      </Form.Item>
    </Form>
  );
};

const SubmitButton = styled(Button)`
width: 100%;
`
