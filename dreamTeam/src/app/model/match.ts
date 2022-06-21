import { Participation } from "./participation";
import { PlayerCuted } from "./playerCuted";

export interface Match {
    id: string,
    team1: Participation[],
    team2: Participation[],
    result?: string,
    mvp?: PlayerCuted,
    shooter?: PlayerCuted,
    center?: PlayerCuted,
    defense?: PlayerCuted
}