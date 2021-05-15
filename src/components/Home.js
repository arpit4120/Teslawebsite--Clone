import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
    
      <Section 
        title="Model S"
        description="Order Online for touchless dilevery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Eventory"
      />
      <Section 
        title="Model Y"
        description="Order Online for touchless dilevery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Eventory"

      />
      <Section 
        title="Model 3"
        description="Order Online for touchless dilevery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Eventory"
      />
      <Section 
        title="Model X"
        description="Order Online for touchless dilevery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Eventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back quarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs less than new Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />


    </Container>
  )
}

export default Home

const Container=styled.div`
  height:100vh;
` 

