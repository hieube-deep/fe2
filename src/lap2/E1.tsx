import React from 'react'
import { Table, Button } from 'antd'
function E1() {
    const columns = [
        { title: "ID", dataIndex: "ID" },
        { title: "Name", dataIndex: "Name" },
        { title: "Email", dataIndex: "Email" },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <>
                    <Button type='primary'>Edit</Button>
                    <Button type='primary'>xóa</Button>
                </>
            ),
        },
        {
            title: "Status", dataIndex: "Status",
            render: (Status: any) => {
                return (<span style={{ color: Status === "active" ? "green" : "red" }}>
                    {Status}
                </span >)
            }
        },
    ];

    const data = [
        { key: 1, ID: "1", Name: "A", Email: "a@gmail.com" },
        { key: 2, ID: "2", Name: "B", Email: "b@gmail.com" },
        { key: 3, ID: "3", Name: "C", Email: "c@gmail.com" },
        { key: 4, ID: "4", Name: "D", Email: "d@gmail.com" },
        { key: 5, ID: "5", Name: "E", Email: "e@gmail.com" },


    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
        </div>
    )
}
export default E1
