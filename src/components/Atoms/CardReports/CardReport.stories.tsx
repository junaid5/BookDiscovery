import CardReport from "./CardReport";
import readbook from './ReadBook.png'

const CardReportComponent={
    title: 'Atoms/CardReport',
    component: CardReport
}

export default CardReportComponent

export const CardReports = ()=> <CardReport image={readbook} heading="CURRENTLY READING" number="26"/>