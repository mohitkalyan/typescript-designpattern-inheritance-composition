import { CsvReader } from "./CsvReader"
import { MatchReader } from "./MatchReader"
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { ConsoleReport } from "./reportTarget/ConsoleReport"
import { Summary } from "./Summary"


const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport())

summary.buildAndPrintReport(matchReader.matches)



