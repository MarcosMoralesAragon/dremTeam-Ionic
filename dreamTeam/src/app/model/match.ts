import { Participation } from "./participation";
import { PlayerCuted } from "./playerCuted";

export interface Match {
    id: string,
    team1: string[],
    team2: string[],
    result?: string,
    mvp?: PlayerCuted,
    shooter?: PlayerCuted,
    center?: PlayerCuted,
    defense?: PlayerCuted
}