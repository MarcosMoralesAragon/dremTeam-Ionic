import { Participation } from "./participation";
import { PlayerCuted } from "./player-cuted";

export interface Match {
    id: string,
    team1: Participation[],
    team2: Participation[],
    result: string,
    mvp: PlayerCuted,
    delantero: PlayerCuted,
    centro: PlayerCuted,
    defensa: PlayerCuted
}
