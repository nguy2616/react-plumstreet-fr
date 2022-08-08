export interface userInterface {
    id: number,
    email: string,
    fullName: string,
    role: roleInterface
}

export interface roleInterface {
    id: number,
    name: string
}