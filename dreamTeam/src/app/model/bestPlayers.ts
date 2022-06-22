import { PlayerCuted } from "./playerCuted";

export interface BestPlayers {
    moreGoals: PlayerCuted[],
    bestPlayers: PlayerCuted[],
    bestShooters: PlayerCuted[],
    bestCenters: PlayerCuted[],
    bestDefense: PlayerCuted[]
}
