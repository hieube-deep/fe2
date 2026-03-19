import { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type story = {
    title: string,
    author: string,
    description: string,
    category: String,
}
function Lap4() {
    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        }
    })
    const nav = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: async (values: story) => {
            await axios.post('http://localhost:3000/stories', {
                ...values,
                createdAt: new Date().toISOString()
            });
        },
        onSuccess: () => {
            toast.success("Thêm truyện thành công");
            nav("/list")
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinshin = (values: story) => {
        mutate(values);
    }

    return (
        <div className='flex items-center justify-center  bg-gray-10'>
            <div className='bg-white p-6 rounded-xl shadow-md w-[500px]'>
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
                    <Form.Item label="mô tả"
                        name="description"
                    >
                        <Input.TextArea placeholder='nhập mô tả truyện' rows={5} />
                    </Form.Item>
                    <Form.Item label="Danh mục" name="category">
                        <Select placeholder="Chọn danh mục"
                            options={categories.map((item: any) => ({
                                label: item.name,
                                value: item.name,
                            }))}
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" loading={isPending}>
                        Thêm
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default Lap4
