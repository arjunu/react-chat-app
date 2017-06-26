import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from './MessageInput.css';

const MessageInput = ({onSend, onMessageInputChange}) => (
    <div>
        <TextField className={styles.input}
                   hintText="Enter message"
                   onChange={onMessageInputChange}
        />
        <RaisedButton label="Send"
                      primary
                      onClick={onSend}
        />
    </div>
);

export default MessageInput;