import React from 'react';
import {
  PrincipalContainer,
  ContentImage,
  Image,
  SectionText,
  Text,
  Wrapper,
  CircleLeftTop,
  CircleRightBottom,
  CircleRightTop,
} from './styles';
import { BadgesList, Loading, PageError, LinkRoute } from '../../components';
import person from '../../resources/images/Badge_Trofeo.png';
import api from '../../api';

class Badges extends React.Component{  
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        });
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data,
            })
        } catch(error){
            this.setState({
                loading: false,
                error: error,
            })
        }
    }

    render(){
        if(this.state.loading === true){
            return <Loading />;
        };

        if(this.state.error){
            return <PageError error={this.state.error} />;
        };

        return(
        <PrincipalContainer>
          <CircleLeftTop />
          <ContentImage>
            <Image src={person}/>
            <SectionText>
              <Text>Crea un Badge para cualquier integrante de tu equipo de trabajo.</Text>
              <LinkRoute link={'/badges/new'} name="Nuevo Badge" /> 
            </SectionText>
          <CircleRightBottom />
          </ContentImage>
          <Wrapper>
            <BadgesList data={this.state.data} />
          </Wrapper>
          <CircleRightTop />
        </PrincipalContainer>
        );
    } 
}

export default Badges;