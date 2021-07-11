export interface User {
    id: number;
    name: string;
}


export interface Mission {
    id: number;
    title: string;
    due: Date;
    taskStatus: number;
    userId: number;
    _User: User;
}