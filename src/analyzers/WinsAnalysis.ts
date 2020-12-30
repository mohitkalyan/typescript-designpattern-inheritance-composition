import { Analyzer } from "../Summary"
import { MatchData } from "../MatchData"
import { MatchResult } from "../MatchResult"

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) { }

    run(matches: MatchData[]): string {
        let win = 0

        for (const match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                win++
            } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
                win++
            }
        }

        return `team ${this.team} won ${win} matches`
    }
}