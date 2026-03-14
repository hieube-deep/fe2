import React from 'react'
import { Form, Input, Button } from "antd";

function E2() {

    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };
    return (
        <div className="flex items-center justify-center  bg-gray-10">
            <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">
                <Form onFinish={onFinish}>
                    <Form.Item label="tên sản phẩm">
                        <Input />
                    </Form.Item>

                    <Form.Item label="giá">
                        <Input />
                    </Form.Item>

                    <Form.Item label="số lượng">
                        <Input />
                    </Form.Item>

                    <Form.Item label="mô tả">
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Đăng nhập
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default E2
