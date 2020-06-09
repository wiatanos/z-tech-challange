import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export default class Card extends Component {

    render() {
        return (
            <div className='col-2 col-resize'>
                <div className="product-card">
                    <span className="tag">
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </span>
                    <h2>{this.props.item.title}</h2>
                    <figure>
                        <img src={this.props.item.images[0].url} alt="product" />
                    </figure>
                    <div className="cart-buttons">
                        <button><FontAwesomeIcon icon={ faPlus} /></button>
                        <button><FontAwesomeIcon icon={ faMinus} /></button>
                    </div>
                    <span className="price">{this.props.item.productVariants[0].price}</span>
                </div>
            </div>
        )
    }
}