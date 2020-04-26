import React from 'react';
import { LinkRoute } from '../../components';
import {
  PrincipalContainer,
  ContentLeft,
  ContentRight,
  TitleContainer,
  Title,
  DrescriptionContainer,
  Description,
  Team,
  CircleLeftTop,
  CircleRightTop,
  CircleLeftBottom,
  CircleRightBottom,
} from './styles';

import team from '../../resources/images/Badge_Comp.png';

class Home extends React.Component{  
  render(){
    return(
    <PrincipalContainer>
      <CircleLeftTop />
      <CircleRightTop />
      <ContentLeft>
        <TitleContainer>
          <Title>Badges</Title>
          <Title>Team</Title>
        </TitleContainer>
        <DrescriptionContainer>
          <Description>
            Crea badges para tus equipo 
            de trabajo e incentivalos al 
            crecimiento profecional.
          </Description>
          <LinkRoute link={'/badges'} name="Ingresar" />
        </DrescriptionContainer>
      </ContentLeft>
      <ContentRight>
        <Team src={team}/>
      </ContentRight>
      <CircleLeftBottom />
      <CircleRightBottom />
    </PrincipalContainer>
    );
  }
}

export default Home;