import React from 'react';
import './styles.css';
import Loader from 'react-loader-spinner'

function Loading(){
    return(
        <div className='PageLoading'>
            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Loading;