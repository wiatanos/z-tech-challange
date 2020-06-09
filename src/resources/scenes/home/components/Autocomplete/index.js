import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleApiWrapper } from 'google-maps-react'

import { setSearchParams, setAddress } from '../../../../../app/store/actions';
import Loading from '../../../../components/Loading';
import '../../../../../resources/assets/styles/_variables.scss';
import './index.scss';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({ address });
    this.setState({extraFields: true})
    this.props.setAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({queryParams: {
          'algorithm': 'NEAREST',
          'lat': latLng.lat,
          'long': latLng.lng,
          'now': new Date().toISOString('ISO-8601')
        }})
      })
      .catch(error => console.error('Error', error));
  };

  extraFields = () => {
    if(!this.state.extraFields) return false

    const { setSearchParams } = this.props

    return (
      <Fragment>
        <div className='row'>
          <input placeholder='Número' className='extra-field' />
          <input placeholder='Complemento' className='extra-field' />
        </div>
        <div className='row j-center mt-2'>
          <button className='btn-see-products' onClick={() => setSearchParams(this.state.queryParams)}>Ver produtos disponíveis</button>
        </div>
      </Fragment>
    )
  }
 
  render() {
    const searchOptions = {
      componentRestrictions: {
        country: 'br'
      },
    }

    return (
      <div className="search-container">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          searchOptions={searchOptions}
          shouldFetchSuggestions={this.state.address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='row'>
              <input
                {...getInputProps({
                  placeholder: 'Procurar endereço ...',
                  className: 'search-field',
                })}
              />

              <div className="autocomplete-dropdown-container">
                {loading && <Loading  />}
                {suggestions.map(suggestion => {
                  const className = 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {className})}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </PlacesAutocomplete>
        {this.extraFields()}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  searchParams: store.setSearchParams.params,
  address: store.setAddress.address
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    setSearchParams,
    setAddress
   }, dispatch);

const mapsApi = GoogleApiWrapper({
  apiKey: 'AIzaSyC6sxp0RyYo1RQKsU7hkT2EeJ7R7JKlLas',
  libraries: ['places'],
  language: 'pt_BR'
})

export default connect(mapStateToProps, mapDispatchToProps)((mapsApi)(Autocomplete));