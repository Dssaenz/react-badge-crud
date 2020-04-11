import React from 'react';

class BadgesList extends React.Component{
    render(){
        return(
            <div className='list-unstyled'>
                {this.props.data.map(item => {
                return(
                    <li key={item.id}>
                        <p>{item.firstName}</p>
                    </li>
                )
                })}
            </div>
        );
    }
}

export default BadgesList;