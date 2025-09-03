import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Form, Modal, Input, Radio, Button } from "antd";
import supabase from "../../utils/supabase";
function AdminLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const getAdmin = localStorage.getItem("admin");
    if (getAdmin) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  // const isAdmin = true;
  // if (isAdmin) {
  //   return(
  //     <Navigate to={"/admin/dashboard"}/>
  //   )
  // }
  const [formLayout, setFormLayout] = useState("horizontal");
  const [form] = Form.useForm();


  const onSubmitForm = async (values) => {
    let { data: admins, error } = await supabase
      .from("admins")
      .select("*")
      .eq("email", values.email)
      .eq("password", values.password)
      .limit(1);
    if (error) {
      console.log("admin error", error);
    } else {
      console.log("admin data", admins);
      localStorage.setItem("admin", JSON.stringify(admins));
      navigate("/admin/dashboard")
    }
  };
  return (
    <div>
      <Modal
        title={`Only for admins`}
        centered
        open={true}
        onCancel={() => {}}
        footer={null}
        closable={false}
      >
        <Form
          layout={"vertical"}
          form={form}
          initialValues={{ layout: formLayout }}
          onFinish={onSubmitForm}
          style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
        >
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
              {
                type: "email",
                message: "Enter valid email address!",
              },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="password here" type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              now!
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminLogin;
