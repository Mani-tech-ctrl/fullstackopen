import React from 'react';

const Total = (props) =>{
    return(
        <p>
            Number of excersises {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
    )
}

export default Total;