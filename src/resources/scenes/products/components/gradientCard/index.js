import React, { Component } from "react";

import './index.scss';

export default class GradientCard extends Component {
    constructor(props) {
        super(props);

        let id = this.props.title.replace(/\s/g, '')
                                 .replace(/[^\w\s]/gi, '')
                                 .toLowerCase();
        
        this.state = {id: id}
    }

    render() {
        return (
            <div className="bg-card" id={this.state.id}>
                <div className="title-content">
                    <h3>{this.props.title}</h3>
                    <hr />
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
        )
    }
}