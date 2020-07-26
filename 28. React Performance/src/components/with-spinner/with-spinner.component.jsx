import React from 'react';

// import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...other }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...other} />;
};
export default WithSpinner;
