import React, { Component, Fragment } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import GET_ADDRESS from '../../../app/database/queries/searchAddress';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Unavailable from './components/unavailable';
import Categories from './components/categories';
import { setPoc } from '../../../app/store/actions';

import '../../assets/styles/_main.scss';
 
class Products extends Component {

    poc = (data) => {
        if(data.pocSearch.length == 0) return false

        this.props.setPoc(data.pocSearch[0])
    }

    render () {

        const {searchParams} = this.props;

        return (
            <Fragment>
                <Header />
                <div className='wrapper'>
                    <Query query={GET_ADDRESS} variables={ searchParams } onCompleted={(data) => this.poc(data)}>
                        {({ loading, error, data }) => {
                            if(loading) return <Loading  />;
                            if(error) console.log(error);
                            if(!data || data.pocSearch.length == 0) return <Unavailable />

                            return (
                                <Categories />
                            )
                        }}
                    </Query>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = store => ({
    poc: store.setPoc.poc,
    searchParams: store.setSearchParams.params
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setPoc }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);