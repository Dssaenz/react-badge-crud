// Uso de react hooks
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ListContainer,
  SectionFilter,
  PrincipalContainer,
  TextFilter,
} from './styles';
import { BadgeCard } from '../';

// Función para filtrar todos badges
function useSearchBadges(data) {
  const [ query, handleQuery ] = useState('')
  const [filterResults, setFilter] = useState(data)

  useMemo(() => {
    const result = data.filter(item => {
      return `${item.firstName} ${item.lastName}`.toLowerCase().includes(query.toLowerCase())
    });

    setFilter(result)
  }, [data, query]);

  return { query, handleQuery, filterResults }
}

function BadgesList(props) {
  const data = props.data;
  const { query, handleQuery, filterResults } = useSearchBadges(data);

  if(filterResults.length === 0){
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
      <PrincipalContainer>
        <SectionFilter>
          <TextFilter>Encuentra el Badge que necesitas.</TextFilter>
          <input 
          value={query}
          onChange={(e) => {
            handleQuery(e.target.value)
          }}/>
        </SectionFilter>
        <ListContainer>
        {filterResults.map(item => {
        return <BadgeCard item={item} />
          // <li key={item.id} className='Badge__list'>
          //   <Link to={`/badges/${item.id}`}>
          //     <div>
          //       <img src={item.avatarUrl} alt={item.firstName} className='Badge__image' />
          //       <div>
          //         <p className='Badge__list--name'>{item.firstName} {item.lastName}</p>
          //         <i className='fab fa-github' />
          //         <a href={`https://github.com/${item.gitHub}`} className='Badge__social'>{item.gitHub}</a>
          //         <p className='Badge__list--git'>{item.jobTitle}</p>
          //       </div>
          //     </div>
          //   </Link>
          // </li>
      })}
      </ListContainer> 
      </PrincipalContainer>
    );
}

export default BadgesList;