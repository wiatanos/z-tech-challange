import React from 'react';
import { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='row j-center'>
                <span><FontAwesomeIcon icon={faSpinner} spin /></span>
                <span>Carregando...</span>
            </div>
        )
    }
}