import React from 'react'
import { Button, Form, Input, Space } from "antd"
function Lap2() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
        margin: "0 auto"
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="name" label="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="password" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>

                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Lap2
