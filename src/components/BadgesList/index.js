import React from 'react';
import './styles.css';

function BadgesList(props){
    return(
      <div>
        {props.data.map(item => {
        return(
          <li key={item.id} className='Badge__list'>
            <img src={item.avatarUrl} alt={item.firstName} className='Badge__image' />
            <div>
              <p className='Badge__list--name'>{item.firstName} {item.lastName}</p>
              <i className='fab fa-github' />
              <a href={`https://github.com/${item.github}`} className='Badge__social'>{item.github}</a>
              <p className='Badge__list--git'>{item.jobTitle}</p>
            </div>
          </li>
        )
        })}
      </div>
    );
}

export default BadgesList;