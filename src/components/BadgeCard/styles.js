import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListWrapper = styled.li`
	list-style: none;
	width: 40%;
	margin: 20px 0;
`;

export const LinkRoute = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	background-color: #FFF;
`;

export const SectionWrapper = styled.div`
	display: flex;
	padding: 10px 15px;
	border-radius: 4px;
	-webkit-box-shadow: -3px 4px 9px -2px rgba(0,0,0,0.48);
	-moz-box-shadow: -3px 4px 9px -2px rgba(0,0,0,0.48);
	box-shadow: -3px 4px 9px -2px rgba(0,0,0,0.1);
`;

export const BadgeImage = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50px;
	margin-right: 20px;
`;

export const SectionItems = styled.div``;

export const TextName = styled.p`
	font-size: 20px;
	color: ${props => props.theme.color.blue};
	font-weight: bold;
`;
export const TextGit = styled.p`
font-size: 15px;
	color: ${props => props.theme.color.blue};
	font-weight: bold;
`;

export const TextJob = styled.p`
font-size: 15px;
	color: ${props => props.theme.color.blue};
	font-weight: bold;
`;

export const SectionIcon = styled.div`
	display: flex;
	align-items: center;
	margin: 3px 0;
`;

export const Icon = styled.i`
	color: #000;
	margin-right: 5px;
`;