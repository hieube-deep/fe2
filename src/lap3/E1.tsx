import { Form, Input, Button } from "antd";
import Password from "antd/es/input/Password";

const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <div className="flex items-center justify-center  bg-gray-10">
            <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name"
                        rules={[{
                            required: true,
                            message: "không bỏ trống",
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email"
                        rules={[
                            {
                                required: true,
                                message: "không bỏ trống",
                            },
                            {
                                type: "email",
                                message: "nhập đúng định dạng email"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password"
                        rules={[
                            {
                                required: true,
                                message: "không bỏ trống",
                            },
                            {
                                min: 6,
                                message: "nhập nhiều hơn 6 ký tự"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Confirm Password" name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập lại mật khẩu"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("mật khẩu không khớp"));

                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Đăng nhập
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
};

export default LoginForm;