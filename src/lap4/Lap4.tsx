import { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCRUDStory } from "../lap5/hooks";
type story = {
    title: string,
    author: string,
    description: string,
    category: String,
}
function Lap4() {
    const { list, add } = useCRUDStory();
    const { isPending } = add;
    const { data: categories } = list;
    const nav = useNavigate();

    const onFinsish = (data: story) => {
        add.mutate(data);
        nav("/list")
    }

    return (
        <div className='flex items-center justify-center  bg-gray-10'>
            <div className='bg-white p-6 rounded-xl shadow-md w-[500px]'>
                <Form onFinish={onFinsish}>
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
