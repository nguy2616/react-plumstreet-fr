export interface userInterface {
    id: number,
    email: string,
    fullName: string,
    isPrimary: boolean,
    role: roleInterface
}

export interface roleInterface {
    id: number,
    name: string
}