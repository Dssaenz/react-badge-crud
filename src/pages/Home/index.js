import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
class Home extends React.Component{  
    render(){
        return(
            <div>
                <Link to={'/badges'}>
                    Go
                </Link>
            </div>
        );
    }
}

export default Home;