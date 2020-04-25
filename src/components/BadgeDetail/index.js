import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../Badge';

function BadgeDetail(props) {
  console.log('item', props.item)
  return(
    <div>
      <div>Header</div>
        <article>
          <section>
            <Badge firstName={props.item.firstName} lastName={props.item.lastName} email={props.item.email} jobTitle={props.item.jobTitle} gitHub={props.item.gitHub} />
          </section>
          <section>
            <Link to={`/badges/${props.item.id}/edit`}>
              Editar
            </Link>
            <button>Eliminar</button>
          </section>
        </article>
      </div>
    );
}

export default BadgeDetail;