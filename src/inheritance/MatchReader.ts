import { CsvFileReader } from "./CsvFileReader"
import { dateStringToDate } from "./utils"
import { MatchResult } from "./MatchResult"

type MatchData = [Date, string, string, number, number, MatchResult, string]


export class MatchReader extends CsvFileReader<MatchData> {
    matchRow(value: string[]): MatchData {
        return [
            dateStringToDate(value[0]),
            value[1],
            value[2],
            parseInt(value[3]),
            parseInt(value[4]),
            value[5] as MatchResult,
            value[6]
        ]
    }
}