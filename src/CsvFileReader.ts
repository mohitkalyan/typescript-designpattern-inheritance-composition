import fs from "fs"
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult"

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {

    data: MatchData[] = []

    constructor(public file: string) { }

    read() {
        this.data = fs.readFileSync(this.file, { encoding: "utf-8" })
            .split("\n").map((row: string): string[] => { return row.split(",") })
            .map((value: string[]): MatchData => {
                return [
                    dateStringToDate(value[0]),
                    value[1],
                    value[2],
                    parseInt(value[3]),
                    parseInt(value[4]),
                    value[5] as MatchResult,
                    value[6]
                ]
            })

    }
}