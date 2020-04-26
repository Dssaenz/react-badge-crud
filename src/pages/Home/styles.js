import styled from 'styled-components';

export const PrincipalContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  position: relative;
`;

export const ContentLeft = styled.div`
  width: 40%;
`;

export const ContentRight = styled.div`
  width: 60%;
`;

export const TitleContainer = styled.div`
  margin-left: 12%;
  margin-top: 140px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: ${props => props.theme.size.h1};
  color: ${props => props.theme.color.darkViolet};
`;

export const DrescriptionContainer = styled.div`
  width: 80%;
  margin-left: 12%;
  margin-top: 10px;
  `;

export const Description = styled.p`
  color: ${props => props.theme.color.grey};
  font-size: 120%;
`;

export const Team = styled.img`
  width: 90%;
  height: 70%;
  margin:  40px auto 0 auto;
`;

export const CircleLeftTop = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-bottom-right-radius: 150px;
  background-color: ${props => props.theme.color.violet};
`;

export const  CircleRightTop = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  border-bottom-left-radius: 160px;
  background-color: ${props => props.theme.color.orange};
  right: 0;
`;

export const  CircleLeftBottom = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  left: 0;
  bottom: 0;
  border-top-right-radius: 230px;
  background-color: ${props => props.theme.color.blue};
`;

export const  CircleRightBottom = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  right: 0;
  bottom: 0;
  border-top-left-radius: 130px;
  background-color: ${props => props.theme.color.whiteBlue};
`;