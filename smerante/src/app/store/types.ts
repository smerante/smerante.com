export type IUser = {
    name: string;
}

export type UserAction = {
    type: string;
    payload: IUser;
}