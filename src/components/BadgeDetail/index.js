import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../Badge';
import DeletebadgeModal from '../DeleteBadgeModal';

function BadgeDetail(props) {
  return(
    <div>
      <div>Header</div>
        <article>
          <section>
            <Badge 
              firstName={props.item.firstName}
              lastName={props.item.lastName}
              email={props.item.email}
              jobTitle={props.item.jobTitle}
              gitHub={props.item.gitHub}
            />
          </section>
          <section>
            <Link to={`/badges/${props.item.id}/edit`}>
              Editar
            </Link>
            <button onClick={props.onOpenModal}>Eliminar</button>
          </section>
        </article>
        <DeletebadgeModal 
          isOpen={props.showModal} 
          onClose={props.onCloseModal}
          onDeleteBadge={props.onDeleteBadge}
        />
      </div>
    );
}

export default BadgeDetail;