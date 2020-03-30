import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import configureStore from "./store/configureStore";
import "workbox-build";
// import "./db";

const rootElement = document.getElementById("root");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-workers.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);

            registration.installing; // the installing worker, or undefined
            registration.waiting; // the waiting worker, or undefined
            registration.active; // the active worker, or undefined

            registration.addEventListener('updatefound', () => {
                // A wild service worker has appeared in reg.installing!
                const newWorker = registration.installing;

                newWorker.state;
                // "installing" - the install event has fired, but not yet complete
                // "installed"  - install complete
                // "activating" - the activate event has fired, but not yet complete
                // "activated"  - fully active
                // "redundant"  - discarded. Either failed install, or it's been
                //                replaced by a newer version

                newWorker.addEventListener('statechange', () => {
                    // newWorker.state has changed
                });
            });
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });


    navigator.serviceWorker.addEventListener('controllerchange', () => {
        // This fires when the service worker controlling this page
        // changes, eg a new worker has skipped waiting and become
        // the new active worker.
        console.log("Controller has been changed");
    });
}

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <Provider store={configureStore()}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
} else {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}
