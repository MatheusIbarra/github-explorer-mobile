import { AxiosResponse } from 'axios';
import { api } from './api';

export class User {
    avatar_url: string;
    id: number;
    login: string;
    repos_url: string;

    static get = async function (user: string): Promise<AxiosResponse<User[]>> {
        return await api.get(`/search/users?q=${user}`);
    };
}

export class Repository {
    html_url: string;
    description: string;
    id: number;
    name: string;

    static get = async function (
        user: string,
    ): Promise<AxiosResponse<Repository[]>> {
        return await api.get(`/users/${user}/repos`);
    };
}
