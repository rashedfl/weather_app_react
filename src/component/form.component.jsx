import React from 'react';
import './form.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = props =>{
    return(
        <div className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="row">
                            <input type="text" className="corm-control col-md-9" name="city" autoComplete="off" placeholder="City" />
                            <button className="btn btn-default text-light bg-dark col-md-2" id="btn" id="btn"><FontAwesomeIcon icon={faSearch} /></button>
                        </div>                       
                    </div>                   
                </div>
            </form>    
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City 
        </div>
    );
}

export default Form;