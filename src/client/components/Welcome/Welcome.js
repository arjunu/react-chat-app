import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Welcome.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Welcome = ({onUsernameChange, startDisabled, onStartClick}) => (
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
                      onClick={onStartClick}
        />
    </div>
);

Welcome.propTypes = {
    onUsernameChange: PropTypes.func,
    startDisabled: PropTypes.bool,
    onStartClick: PropTypes.func
};

export default Welcome;