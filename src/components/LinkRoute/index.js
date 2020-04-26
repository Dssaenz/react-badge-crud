import React from 'react';
import { Redirect, ContainerButton } from './styles';

function LinkRoute(props) {
const { colorLink } = props;
return(
  <ContainerButton>
    <Redirect to={props.link} colorLink={colorLink}>
      {props.name}
    </Redirect>
  </ContainerButton>
  );
}

export default LinkRoute;