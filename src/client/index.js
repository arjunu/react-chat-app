import './styles.css';
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

export const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);