import fs from "fs"

export abstract class CsvFileReader<T> {

    data: T[] = []

    constructor(public file: string) { }
    abstract matchRow(value: string[]): T

    read() {
        this.data = fs.readFileSync(this.file, { encoding: "utf-8" })
            .split("\n").map((row: string): string[] => { return row.split(",") })
            .map(this.matchRow)

    }



}