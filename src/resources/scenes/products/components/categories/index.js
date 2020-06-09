import React, { Component, Fragment } from "react";
import { Query } from 'react-apollo'

import GET_CATEGORIES from '../../../../../app/database/queries/categoryList';
import List from '../list';
import GradientCard from '../gradientCard';
import Loading from '../../../../components/Loading';
import './index.scss';

class Categories extends Component {

    render () {

        return (
            <Query query={GET_CATEGORIES}>
                {({ loading, error, data }) => {
                    if(loading) return <Loading />;

                    return (
                        <Fragment>
                            <div className='row p-3 d-flex j-center'>
                                {data.allCategory.map((category, index) => {
                                    {index+1}
                                    return (
                                        <div className='col-1' >
                                            <GradientCard title={category.title} key={index}/>
                                        </div>

                                    )
                                })}
                            </div>

                            {data.allCategory.map((category, index) => {
                                {index+1}
                                return (
                                    <div className='row d-flex j-center category' >
                                        <span className="category-title" >{category.title}</span>
                                        <div className='row d-flex j-center category-body' >
                                            <List category={category.id} key={index} />
                                        </div>
                                    </div>
                                )
                            })}
                        </Fragment>
                    )

                }}
            </Query>
        )
    }
}

export default Categories;