import React, { Component } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

class Header extends Component {

    renderAddress = () => {
        if(!this.props.address) return false

        return (
            <div className='col-4' id="address-display">
                <span><FontAwesomeIcon icon={faMapMarkedAlt} /> </span>
                <span>{this.props.address.substring(0, 10)}...</span>
            </div>
        )
    }

    render() {
        return (
            <header className='row'>
                <div id="logo">
                    <span className='ml-1'>JÃO DELIVERY <FontAwesomeIcon icon={faBeer} /></span>
                </div>
                {this.renderAddress()}
            </header>
        )
    }
}

const mapStateToProps = store => ({
    address: store.setAddress.address
});

export default connect(mapStateToProps)(Header)