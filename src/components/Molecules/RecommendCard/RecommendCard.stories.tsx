import RecommendCard from './RecommendCard'

const RecommendCardComponent={
    title: 'Molecules/RecommendCard',
    component: RecommendCard
}

export default RecommendCardComponent

export const RecommendedCard = ()=> <RecommendCard card={{
    "img": "http://127.0.0.1:8887/Rec1.png",
      "bookName": "Basic Physics",
      "bookAuthor": "By  Karl F Kuhn",
      "category": "Category: Chemistry",
      "stars": "4.5",
      "ratings": "1210 ratings"
  }} />