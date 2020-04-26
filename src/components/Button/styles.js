import styled from 'styled-components';

export const ContainerButton = styled.div`
  margin: 20px 0;
`;

export const ButtonOnPress = styled.button`
  background-color: ${props =>
    props.colorButton
      ? props.theme.color.blue
      : props.theme.color.violet};
	border-radius: 12px;
	border: ${props =>
    props.colorButton
      ? props.theme.color.blue
      : props.theme.color.violet};
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	font-size: 17px;
	padding: 12px 38px;
	text-decoration: none;
  a {
    color: #FFF;
    text-decoration: none;
  }
`;