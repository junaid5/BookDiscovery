import ReadingCard from './ReadingCard'

const ReadingCardComponent={
    title: 'Molecules/ReadingCard',
    component: ReadingCard
}

export default ReadingCardComponent

export const ReadeCard = ()=> <ReadingCard card={{
    "img": "http://127.0.0.1:8887/Re1.png",
    "bookName": "Inorganic Chemistry",
    "bookAuthor": "VK Ahulwalia",
    "category": "Chemistry",
    "pagesLeft": "20/250"
  }} />