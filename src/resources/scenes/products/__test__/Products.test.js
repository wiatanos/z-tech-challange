import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Query } from 'react-apollo';
import { MockedProvider } from '@apollo/react-testing'
import { act } from "react-dom/test-utils";

import GET_ADDRESS from '../../../../app/database/queries/searchAddress';
import Unavailable from '../components/unavailable'

afterEach(cleanup)

const mocks = [
    {
        request: {
        query: GET_ADDRESS,
        variables: {
            'algorithm': 'NEAREST',
            'lat': '0',
            'long': '0',
            'now': new Date().toISOString('ISO-8601')
        }
        },
        result: {
            data: {
                pocSearch: []
            }
        }
    }
]

describe('Query poc', () => {
    it('Should render Unavailable', () => {
        const { container } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
              <Unavailable  />
            </MockedProvider>
          )
    })
})