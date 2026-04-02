import { useMutation } from '@tanstack/react-query'
import { message } from 'antd';
import axios from 'axios'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../useAuth/userAuth';

export function Register() {
    const navigate = useNavigate();
    const { setUser } = useAuthStore();

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.post("http://localhost:3000/register", values);
            return res.data;
        },
        onSuccess: ({ data }) => {
            setUser({
                user: data.user,
                token: data.accessToken,
            });
            message.success("đăng ký thành công");
            navigate("/login");
        },
        onError: () => {
            message.error("thất bại");
        }
    })

    const onFinish = (values: any) => {
        mutate(values);
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
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
