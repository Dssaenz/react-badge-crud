import styled from 'styled-components';

export const PrincipalContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
`;

export const CircleLeftTop = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
	border-bottom-right-radius: 160px;
	top: 0;
  background-color: ${props => props.theme.color.whiteBlue};
`;

export const CircleRightBottom = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  right: 0;
  bottom: 0;
  border-top-left-radius: 130px;
  background-color: ${props => props.theme.color.orange};
`;

export const CircleRightTop = styled.div`
  position: absolute;
  width: 110px;
  height: 110px;
  top: 0;
  right: 0;
  border-bottom-left-radius: 130px;
  background-color: ${props => props.theme.color.darkBlue};
`;

export const ContentImage = styled.div`
	width: 45%;
	display: flex;
	margin-top: 40px;
	position: relative;
	align-items: center;
	justify-content: space-around;
`;

export const Image = styled.img`
	width: 21%;
	z-index: 1;
`;

export const SectionText = styled.div`
	width: 40%;
`;

export const Text = styled.p`
	font-size: ${props => props.theme.size.h4};
  color: ${props => props.theme.color.darkViolet};
`;


export const Wrapper = styled.div`
	width: 55%;
	margin-top: 40px;
`;
