import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default class Unavailable extends Component {

    render() {
        return (
            <div className='row j-center'>
                <div className='col-12 t-center'>
                    <h2><FontAwesomeIcon icon={faExclamationCircle} /></h2>
                    <p>Vish, está fora da nossa área...</p>
                </div>
            </div>
        )
    }
}