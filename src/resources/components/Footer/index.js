import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './index.scss';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div className='col-3 col-resize'>
                    <span className='ml-1'>
                        <b>
                            JÃO DELIVERY <FontAwesomeIcon icon={faBeer} />
                        </b>
                    </span>
                    <div className='row j-center'>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className='col-2'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </div>
                <div className='col-3 col-resize'>
                    <p><b>Sobre o JÃO DELIVERY</b></p>
                    <a>Quem somos</a>
                </div>
                <div className='col-3 col-resize'>
                    <p><b>Parcerias</b></p>
                    <a>Quero ser parceiro</a>
                </div>
            </footer>
        )
    }
}