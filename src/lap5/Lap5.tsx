import { Table, Button } from "antd";
import { useCRUDStory } from "./hooks";

export function ListStory() {
    const { list, remove } = useCRUDStory();
    const { data, isLoading } = list;


    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "Author",
            dataIndex: "author",
            key: "author"
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        },
        {
            title: "CreateAt",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text: string) => {
                return new Date(text).toLocaleDateString();
            }
        },
        {
            title: "Action",
            render: (_: string, record: any) => {
                return (
                    <Button
                        style={{ background: "red", padding: "5px 10px", color: "white" }}
                        onClick={() => {
                            if (window.confirm("bạn có muốn xóa không")) {
                                remove.mutate(record.id);
                            }
                        }}
                    >
                        xóa
                    </Button>
                )
            }
        }
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} loading={isLoading} pagination={{ pageSize: 5 }} />
        </div>
    )
}