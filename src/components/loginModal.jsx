import React, { useState } from "react";
import { Form, Modal, Input, Radio, Button } from "antd";

const LoginModal = ({ IsOpen, setIsOpen }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [isRegister, setIsRegister] = useState(false);
  const onSubmitForm = (values) => {
    console.log("values",values);
    
  };

  
  return (
    <Modal
      title={` ${isRegister ? "Register" : "Login"} to my-home.in`}
      centered
      open={IsOpen}
      onCancel={() => setIsOpen(false)}
      footer={null}
    >
      <Form
        layout={"vertical"}
        form={form}
        initialValues={{ layout: formLayout }}
        onFinish={onSubmitForm}
        style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
        
      >
       {
        isRegister &&
        <Form.Item label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please input your name!' }]}
        >
        <Input placeholder="Full Name" />
      </Form.Item>
       }
        <Form.Item label="Email address"
         name="email"
         rules={[{ required: true, message: 'Please input your email address!' },
          {
            type:"email",message:"Enter valid email address!"
          }
         ]}
        >
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item label="Password"
         name="password"
         rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input placeholder="password here" type="password" />
        </Form.Item>
        <Form.Item>
          <Button  type="primary" htmlType="submit" block>{isRegister?"Register":"Login"} now!</Button>
        </Form.Item>
        <hr />
        <Form.Item>
          {isRegister ? "Have account" : "Don't have account"}
          <button className="btn btn-link" onClick={() => setIsRegister(!isRegister)}>{!isRegister?"Register":"Login"} now!</button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
