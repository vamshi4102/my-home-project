import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/product-actions";
import supabase from "../../utils/supabase";

function AddProduct() {
  const [form] = Form.useForm();

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      if (!file) {
        message.warning("Please select image");
        // return;
      }
      await dispatch(createProduct({ name: values.name, file, supabase })).then(
        (res) => {
          message.success("product added")
          form.resetFields(), setFile(null);
        }
      );
    } catch (error) {
      // console.log("errorerrorerror",error);
    }
  };

  return (
    <div className="add-product">
      <h1>Add product</h1>
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input placeholder="enter product name" />
        </Form.Item>
        <Form.Item label="Product Image">
          <Upload
            beforeUpload={(file) => {
              setFile(file);
              return false;
            }}
            maxCount={1}
          >
            <Button>Select Product Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add product now
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
