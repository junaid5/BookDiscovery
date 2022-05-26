import React from 'react'
import TopBar from '../../Molecules/TopBar/TopBar';
import Banner from '../../Molecules/Banner/Banner';
import { Container } from '@mui/material';
import CardReports from '../../Molecules/CardReports/CardReports';
import Reading from '../../Organisms/Reading/Reading';
import Recommendation from '../../Organisms/Recommendation/Recommendation';
import Following from '../../Organisms/Following/Following';
import Topics from '../../Organisms/Topics/Topics'; 
import Ratings from '../../Organisms/Ratings/Ratings';

const LandingPage=()=> {
  return (
    <div>
    <TopBar/>
    <Container>
    <Banner/>
    <CardReports/>
    <Reading/>
    <Recommendation/>
    <Following/>
    <Topics/>
    <Ratings/>
    </Container>
    </div>
  )
}

export default LandingPage