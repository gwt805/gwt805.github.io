import http from "@/utils/axios/index";

export const getData = async () => {
    return await http.get("/data/data.json");
};