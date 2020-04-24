import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function BadgesList(props){

  if(props.data.length === 0){
    return (
      <div>
        <h3>No tienes ningun badges creado</h3>
        <Link to="/badges/new">
          Crear
        </Link>
      </div>
    );
  }  

  return(
      <div>
        {props.data.map(item => {
        return(
          <li key={item.id} className='Badge__list'>
            <Link to={`/badges/${item.id}/edit`}>
              <div>
                <img src={item.avatarUrl} alt={item.firstName} className='Badge__image' />
                <div>
                  <p className='Badge__list--name'>{item.firstName} {item.lastName}</p>
                  <i className='fab fa-github' />
                  <a href={`https://github.com/${item.gitHub}`} className='Badge__social'>{item.gitHub}</a>
                  <p className='Badge__list--git'>{item.jobTitle}</p>
                </div>
              </div>
            </Link>
          </li>
        )
        })}
      </div>
    );
}

export default BadgesList;