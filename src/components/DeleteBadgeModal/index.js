import React from 'react';
import Modals from '../Modals';

function DeleteBadgeModal(props) {
    return(
    <Modals isOpen={props.isOpen} onClose={props.onClose}>
        <h1>hola</h1>
        <button onClick={props.onDeleteBadge}>Eliminar</button>
        <button onClick={props.onClose}>Cancelar</button>
    </Modals>
    );
}

export default DeleteBadgeModal;