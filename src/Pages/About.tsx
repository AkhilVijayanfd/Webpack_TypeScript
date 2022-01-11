
import React, { Component } from 'react';
import { connect } from 'react-redux';
function About(props: any) {
    console.log(" print ", props); 
    return(

        <div>
        
            <h2>About</h2>
            <div>
                Age: <span>{props.age}</span>
            </div>
            <button onClick={props.onAgeUp}>Age Up</button>
            <button onClick={props.onAgeDown}>Age Down</button>
        </div>
    );
}

const mapStateToProps = (state: { age: any; }) => {
    return {
        age: state.age
    };

};



const mapDispatchToProps = (dispatch: (arg0: { type: string; value: number; }) => any) =>{
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
    };
}
export default connect( mapStateToProps,mapDispatchToProps ) (About);