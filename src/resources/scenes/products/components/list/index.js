import React, { Component } from "react";
import { connect } from 'react-redux';
import { Query } from 'react-apollo'

import GET_PRODUCTS from '../../../../../app/database/queries/productList'
import Card from '../card'

class List extends Component {

    render () {

        const poc = {
            "id": this.props.poc.id,
            'categoryId': this.props.category
        }

        return (
            <Query query={GET_PRODUCTS} variables={ poc }>
                {({ loading, error, data }) => {
                    if(loading) return 'loading';
                    if(error) console.log(error);

                    return (
                        data.poc.products.slice(0, 4).map((product, i) => {
                            return (<Card item={product} key={i} />)
                        })
                    )

                }}
            </Query>
        )
    }
}

const mapStateToProps = store => ({
    poc: store.setPoc.poc,
});

export default connect(mapStateToProps)(List);