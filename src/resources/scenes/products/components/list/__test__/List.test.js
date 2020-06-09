import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Query } from 'react-apollo';
import { MockedProvider } from '@apollo/react-testing'

import GET_PRODUCTS from '../../../../../../app/database/queries/productList';
import Card from '../../card'

afterEach(cleanup)

const mocks = [
    {
        request: {
            query: GET_PRODUCTS,
            variables: {
                id: '532',
                categoryId: '94',
            }
        },
        result: {
            data: {
                poc: {
                    title: 'title',
                    images: [{url: 'url'}],
                    productVariants: [{price: 'price'}]
                }
            }
        }
    }
]

describe('Query products', () => {
    it('Should render product card', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <Card item={mocks[0].result.data.poc} />
            </MockedProvider>
          )
    })
})