import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Table, Button, Spin, Image } from "antd";
import axios from "axios";
export function ListStory() {
    const { data, isLoading } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get(" http://localhost:3000/stories");
            return res.data;
        }
    });
    const qc = useQueryClient();
    const { mutate: deleteStory } = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`http://localhost:3000/stories/${id}`);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] });
        }
    });

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
            render: (text: string, record: any) => {
                return (
                    <Button
                        style={{ background: "red", padding: "5px 10px", color: "white" }}
                        onClick={() => {
                            if (window.confirm("bạn có muốn xóa không")) {
                                deleteStory(record.id);
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
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}