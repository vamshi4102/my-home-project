import React, { useState } from "react";
import { Form, Modal, Input, Radio, Button } from "antd";

const LoginModal = ({ IsOpen, setIsOpen }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [isRegister, setIsRegister] = useState(false);
  const onFormLayoutChange = ({ layout }) => {};
  
  return (
    <Modal
      title={` ${isRegister ? "Register" : "Login"} to my-home.in`}
      centered
      open={IsOpen}
      onOk={() => setIsOpen(false)}
      okText={ isRegister?"Register Now":"Login Now"}
      onCancel={() => setIsOpen(false)}
    >
      <Form
        layout={"vertical"}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
      >
       {
        isRegister &&
        <Form.Item label="Full Name">
        <Input placeholder="Full Name" />
      </Form.Item>
       }
        <Form.Item label="Email address">
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="password here" type="password" />
        </Form.Item>
        <hr />
        <Form.Item>
          {isRegister ? "Have account" : "Don't have account"}
          <button className="btn btn-link" onClick={() => setIsRegister(!isRegister)}>{isRegister?"Register":"Login"} now!</button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
