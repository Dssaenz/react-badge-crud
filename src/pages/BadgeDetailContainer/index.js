import React from 'react';
import { Loading, PageError, BadgeDetail } from '../../components';
import api from '../../api';

class BadgesDetailContainer extends React.Component{  
    state = {
        loading: true,
        error: null,
        data: undefined,
    }
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, data: data})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    
    render(){
        if(this.state.loading) {
            return <Loading />
        }
        
        if(this.state.error) {
            return <PageError />
        }

        return <BadgeDetail item={this.state.data} />
    }
}

export default BadgesDetailContainer;