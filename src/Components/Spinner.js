import React from 'react';
import loading from '../logos/spinner.gif'

export default function Spineer() {

    return(
        <div>
            <img src={loading} alt=''/>
            <p> News Loading....</p>
        </div>
    )
}