import React from 'react';
import App from './app/containers/App';
import {Provider} from 'react-redux';
import {store} from './app/store/configStore';
import {MemoryRouter, Redirect, Route, Switch } from 'react-router';
import {AppRegistry} from 'react-vr';
import HomingVRContainer from './app/containers/HomingVR';

const HomingVR = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent('HomingVR', () => HomingVR);
