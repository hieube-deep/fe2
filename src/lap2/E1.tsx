import React from 'react'
import { Table } from 'antd'
function E1() {
    const columns = [
        { title: "ID", dataIndex: "ID" },
        { title: "Name", dataIndex: "Name" },
        { title: "Age", dataIndex: "Age" },
        { title: "Major", dataIndex: "Major" },
    ];

    const data = [
        { key: 1, ID: "1", Name: "A", Age: 12, Major: "Cnnt" },
        { key: 2, ID: "2", Name: "B", Age: 20, Major: "Cnnt" },
        { key: 3, ID: "3", Name: "C", Age: 16, Major: "Cnnt" },
        { key: 4, ID: "4", Name: "D", Age: 12, Major: "Cnnt" },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default E1
