import React, {Component} from 'react';
import { Provider } from "react-redux";
import Home from './containers/home';

import store from './redux/store';

import './style.css';

export default class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}

