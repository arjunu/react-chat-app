import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from './App.css';

const Welcome = ({onUsernameChange, startDisabled}) => (
    <div>
        <h3 className={styles.title}>React Chat App</h3>
        <TextField
            hintText="Username"
            className={styles.username}
            onChange={(event, value) => onUsernameChange(value)}
        />
        <RaisedButton className={styles.start}
                      disabled={startDisabled}
                      primary={true}
                      label="Start Chat"
        />
    </div>
);

export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: ""
        };
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <Welcome onUsernameChange={username => this.setState({username})}
                         startDisabled={!this.state.username}
                />
            </div>
        );
    }
}

App.propTypes = {};