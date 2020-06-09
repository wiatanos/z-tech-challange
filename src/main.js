import React from "react";
import { Provider } from "react-redux";
import PropTypes from 'prop-types'
import Routes from "./app/routes";

const Main = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

Main.propTypes = {
  store: PropTypes.object.isRequired
}

export default Main;