import { AxiosResponse } from "axios";
import { api } from "./api";

export class User {

    avatar_url: string;
    id: number;
    login: string;
    repos_url: string;

    static getUsers = async function(user: string): Promise<AxiosResponse<User[]>> {
        return await api.get(`/search/users?q=${user}`);
    }
}
