import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerButton = styled.div`
  margin: 20px 0;
`;

export const Redirect = styled(Link)`
  background-color: ${props =>
    props.colorLink
      ? props.theme.color.blue
      : props.theme.color.violet};
	border-radius: 12px;
	border: ${props =>
    props.colorLink
      ? props.theme.color.blue
      : props.theme.color.violet};
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	font-size: 17px;
	padding: 12px 38px;
	text-decoration: none;
`;