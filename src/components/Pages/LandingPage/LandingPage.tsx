import React from 'react'
import TopBar from '../../Organisms/TopBar/TopBar';
import Banner from '../../Molecules/Banner/Banner';
import { Container } from '@mui/material';
import CardReports from '../../Molecules/CardReports/CardReports';
import Reading from '../../Organisms/Reading/Reading';
import Recommendation from '../../Organisms/Recommendation/Recommendation';
import Topics from '../../Organisms/Topics/Topics'; 
import Heading from '../../Molecules/Heading/Heading';


const LandingPage=()=> {
  return (
    <div data-testid="LandingPage-element" >
    <TopBar/>
    <Container>
    <Banner/>
    <CardReports/>
    <Heading content="Books You are Reading" />
    <Reading/>
    <Heading content="Recommendations" />
    <Recommendation value="recommendation"/>
    <Heading content="People You are Following Also Read" />
    <Recommendation value="follow"/>
    <Heading content="Topics You Follow" />
    <Topics/>
    <Heading content="Top Ratings" />
    <Recommendation value="rating"/>
    </Container>
    </div>
  )
}

export default LandingPage