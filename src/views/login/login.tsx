import { Button, Checkbox, Form, Input } from 'antd';
import './login.less'
import React from "react";
import { reqLogin } from '@/api/login';

function Login(props:any) {
  console.log(props);
  const onFinish = (values: any) => {
    console.log('Success:', values);
    reqLogin({username:"admin"});
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <div className="login-container">
        <Form
          name="login"
          labelCol={{ span: 8 }} //栅格化布局
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off" //自动补全
          className='login-from'
        >
          <div className='title'>
            ---分割---
          </div>
          <div className='content'>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              initialValue='admin'
            >
              <Input id='login_username' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              initialValue='123456'
            >
              <Input.Password id='login_password' />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
