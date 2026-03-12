import { Table, Button, Modal, Form, Input, Select } from "antd";
import { useState } from "react";

const UserList = () => {

    const [users, setUsers] = useState<any>([]);
    const [open, setOpen] = useState(false);

    const [form] = Form.useForm();

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role"
        }
    ];

    const handleAddUser = (values: any) => {
        const newUser = {
            key: Date.now(),
            ...values
        };

        setUsers([...users, newUser]);
        setOpen(false);
        form.resetFields();
    };

    return (
        <>

            <Button
                type="primary"
                onClick={() => setOpen(true)}
                style={{ marginBottom: 20 }}
            >
                Add User
            </Button>

            <Table dataSource={users} columns={columns} />

            <Modal
                title="Add User"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleAddUser}
                >

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Nhập name" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Nhập email" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: "Chọn role" }]}
                    >
                        <Select
                            options={[
                                { label: "Admin", value: "Admin" },
                                { label: "User", value: "User" }
                            ]}
                        />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form>

            </Modal>

        </>
    );
};

export default UserList;