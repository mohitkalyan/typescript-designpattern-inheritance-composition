import { CsvFileReader } from "./CsvFileReader"
import { MatchResult } from "./MatchResult"

const reader = new CsvFileReader("football.csv");
reader.read();
const matches = reader.data;

let matchWin = 0

for (const match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        matchWin++
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        matchWin++
    }
}

console.log(matchWin)

