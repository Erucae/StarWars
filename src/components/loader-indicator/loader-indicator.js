import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

export default class LoaderIndicator extends Component {
    render() {
        return (
            <Loader
                type='Oval'
                color='red'
                height='60'
                width='60' 
            />
        );
    }
}