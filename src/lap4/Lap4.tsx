import React from 'react'
import { Form, Input, Button, Select } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

function Lap4() {
    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            await axios.post('http://localhost:3000/stories', values);
        },
        onSuccess: () => {
            toast.success("Thêm truyện thành công");
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinshin = (values: any) => {
        mutate(values);
    }

    return (
        <div className='flex items-center justify-center  bg-gray-10'>
            <div className='bg-white p-6 rounded-xl shadow-md w-[400px]'>
                <Form onFinish={onFinshin}>
                    <Form.Item label="Tên truyện"
                        name="title"
                        rules={[{ required: true, message: "Nhập tên truyện" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="tác giả"
                        name="author"
                        rules={[{ required: true, message: "nhập tác giả" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Danh mục" name="category">
                        <Select placeholder="Chọn danh mục"
                            options={[
                                { label: "Hành động", value: "Hành động" },
                                { label: "Hài kịch", value: "Hài kịch" }
                            ]}
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default Lap4
