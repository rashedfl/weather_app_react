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
                    <div className="col-md-3 offset-md-3">
                        <input type="text" className="corm-control" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-default text-light bg-dark"><FontAwesomeIcon icon={faSearch} /></button>
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