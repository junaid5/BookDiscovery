import Heading from './Heading'

const HeadingComponent={
    title: 'Molecules/Heading',
    component: Heading
}

export default HeadingComponent

export const ReadingHeading = ()=> <Heading content="Books You are Reading" />
export const FollowingHeading = ()=> <Heading content="People You are Following Also Read" />
export const RecommendHeading = ()=> <Heading content="Recommendations" />
export const TopicHeading = ()=> <Heading content="Topics You Follow" />
export const RatingHeading = ()=> <Heading content="Top Ratings" />