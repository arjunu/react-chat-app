import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from './MessageInput.css';

const MessageInput = ({}) => (
    <div>
        <TextField className={styles.input}
                   hintText="Enter message"/>
        <RaisedButton label="Send"
                      primary
        />
    </div>
);

export default MessageInput;