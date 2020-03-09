import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import configureStore from "./store/configureStore";

const rootElement = document.getElementById("root");

if(rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
} else {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}
