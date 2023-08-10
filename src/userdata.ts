interface IUser {
    userId: number,
    userName: string,
    userRole: string,
    password: string,
}

export let users:IUser[] = [
    {
        userId: 1,
        userName: "General",
        userRole: "user",
        password: "thisisUser",
    },
    {
        userId: 2,
        userName: "Administrator",
        userRole: "admin",
        password: "thisisAdmin",
    },
]