import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, data }: { id: number | string; data: any }) => {
            const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });
};

export const useCRUDStory = () => {
    const queryClient = useQueryClient();

    const list = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const add = useMutation({
        mutationFn: async (data: any) => {
            const res = await axios.post("http://localhost:3000/stories", data);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });
    const remove = useMutation({
        mutationFn: async (id: number | string) => {
            await axios.delete(`http://localhost:3000/stories/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    const update = useMutation({
        mutationFn: async ({ id, data }: { id: number | string; data: any }) => {
            const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    return { list, add, remove, update };
};
