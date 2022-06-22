export interface User{
    id: string,
    email: string,
    name: string,
    ownLeaguesId?: string[],
    spectatorLeaguesId?: string[]
}