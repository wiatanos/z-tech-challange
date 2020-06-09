import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchParams } from '../../../app/store/actions/index'
import Autocomplete from './components/Autocomplete';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import '../../assets/styles/_main.scss';
import './index.scss';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    redirect = () => {
        if(this.props.searchParams.lat == '0') return false
        return (
            <Fragment>
                <Loading />
                <Redirect to='/produtos' />
            </Fragment>
        )
    }

    render () {

        return (
            <Fragment>
                {this.redirect()}
                <Header />
                <div className='wrapper'>
                    <div id='home-container' className='row'>
                        <div className='row j-center p-3'>
                            <h2>Bebidas geladas a preço de mercado na sua casa agora</h2>
                        </div>
                        <div className='row j-center'>
                            <Autocomplete />
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = store => ({
    searchParams: store.setSearchParams.params
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setSearchParams }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);