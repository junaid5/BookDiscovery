import TopicCard from './TopicsCard'

const TopicCardComponent={
    title: 'Molecules/TopicCard',
    component: TopicCard
}

export default TopicCardComponent

export const RecommendedCard = ()=> <TopicCard card={{
    "img": "http://127.0.0.1:8887/Top6.png",
      "content": "SCIENCE"
  }} />