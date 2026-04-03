import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../useAuth/userAuth"
import axios from "axios";
import { Button, Form, Input, message } from "antd";

export function Login() {

    const { setUser } = useAuthStore();
    const { mutate: login, isPending } = useMutation({
        mutationFn: async (value: any) => {
            const res = await axios.post("http://localhost:3000/login", value);
            return res.data;
        },
        onSuccess: (data) => {
            setUser({
                user: data.user,
                token: data.accessToken,
            });

            message.success("Đăng nhập thành công!");
        },
        onError: () => {
            message.error("Sai email hoặc password!");
        }
    })

    const onFinish = (values: any) => {
        login(values);
    }
    return (
        <div>
            <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: 400, margin: "50px auto" }}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Nhập email!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Nhập password!" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isPending} block>
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}