import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../http/services/apollo'

const Home = asyncComponent({ resolve: () => { return import('../../resources/scenes/home') } })
const Products = asyncComponent({ resolve: () => { return import('../../resources/scenes/products') } })

export default class Routes extends Component {
  render () {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <ApolloProvider client={apolloClient}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/produtos' component={Products} />
                </ApolloProvider>
            </Switch>
        </BrowserRouter>
    )
  }
}
