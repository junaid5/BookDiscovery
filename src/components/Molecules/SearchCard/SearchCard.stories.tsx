import SearchCard from './SearchCard'

const SearchCardComponent={
    title: 'Molecules/SearchCard',
    component: SearchCard
}

export default SearchCardComponent

export const RecommendedCard = ()=> <SearchCard card={{
    "img": "http://127.0.0.1:8887/Fol1.png",
      "bookName": "Inorganic Cemistry",
      "bookAuthor": "Roary Ried",
      "description": "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
      "category": "Category: Chemistry",
      "stars": "4.5",
      "ratings": "1210 ratings"
  }} />