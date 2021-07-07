import React from 'react';




const Smurf = (props) => {

    const handleClick = () => {
        props.deleteData(props.smurf.id)
    }

    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button onClick={handleClick}>delete me</button>
        </div>
    )
}


export default  Smurf;