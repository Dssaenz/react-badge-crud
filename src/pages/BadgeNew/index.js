import React from 'react';
import {
    Navbar,
    Header,
    Badge,
} from '../../components';

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <Badge 
                            firstName='Darwin'
                            lastName='Sáenz'
                            jobTitle='Frontend Developer'
                            github='Dssaenz'
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
};

export default BadgeNew;