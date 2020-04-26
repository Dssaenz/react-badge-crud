import React from 'react';
import { ButtonOnPress, ContainerButton } from './styles';

function Button(props) {
  const { colorButton, onClick } = props;
  return(
    <ContainerButton>
      <ButtonOnPress onClick={onClick} colorButton={colorButton}>
        {props.name}
      </ButtonOnPress>
    </ContainerButton>
  );
}

export default Button;