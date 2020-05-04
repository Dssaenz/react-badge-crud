import styled from 'styled-components';

export const PrincipalContainer = styled.div`
	width: 100%;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SectionFilter = styled.div`
	margin-left: 5%;
`;

export const TextFilter = styled.p`
	font-size: ${props => props.theme.size.h4};
  color: ${props => props.theme.color.darkBlue};
`;