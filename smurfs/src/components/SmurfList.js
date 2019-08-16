import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getData, sendData, deleteData} from '../actions'
import Loader from 'react-loader-spinner';
import Smurf from './Smurf'



const SmurfList = (props) => {
    const [newSmurf , setNewSmurf] = useState({name: '', age: '', height: ''})

const handleSubmit = (e) => {
    e.preventDefault()
    props.sendData(newSmurf);
     console.log(newSmurf) 
}

const handleChange = (e) => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
}




    return (
        <div>
            <h1>Smurf Village</h1>
            <button onClick={props.getData}>
            {props.isLoading ? 
                    <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height="80"
                    width="80"
                />  : 'Come out Smurfs'}</button>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        name='name'
                        placeholder='new smurf'
                        onChange={handleChange}
                    />
                    <input 
                        type='number'
                        name='age'
                        placeholder='age'
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='height'
                        placeholder='height'
                        onChange={handleChange}
                    />
                    <button>add a smurf</button>
                </form>
                
            {props.smurfs &&
            props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteData={props.deleteData}/>)}
        </div>
        
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        smurfs: state.smurf
    }
}

export default connect(mapStateToProps, {getData,sendData,deleteData})(SmurfList);
































// import React from 'react';
// import {Smurf} from './Smurf'
// import { connect} from 'react-dedux'
// import {getData}  from '../actions'

// const SmurfList = (props) => {

//     return (
//         <div>
//             <h1>Smurf Village</h1>
//             <button>Come out Smurfs</button>
//         <Smurf smurf={props.smurf}/>
//         </div>
        
//     )
// }

// const mapStateToProps = state => {
//     return {
//         smurf: state.name
//     }
// }


// export default connect(mapStateToProps, {})(SmurfList);