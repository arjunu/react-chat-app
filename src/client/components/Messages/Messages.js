import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Messages.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import classnames from 'classnames';

const Messages = ({items}) => (
    <List className={styles.list}>
        {items.map(message => (
            [<ListItem
                className={classnames({[styles.alignRight]: !message.get("incoming")})}
                primaryText={message.get("title")}
                secondaryText={
                    <p>
                        {message.get("content")}
                    </p>
                }
            />,
                <Divider />]
        ))}
    </List>
);

Messages.propTypes = {};

export default Messages;