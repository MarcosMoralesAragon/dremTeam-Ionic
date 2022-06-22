import { BestPlayers } from "./bestPlayers"

export interface League {
    name: string,
    id: string,
    playersId?: string[],
    matchesId?: string[],
    bestOfTheLeague?: BestPlayers 
}
