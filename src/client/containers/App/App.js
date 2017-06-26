import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as styles from './App.css';
import {enterChat} from "../../actions";
import Welcome from '../../components/Welcome/Welcome';
import Messages from '../../components/Messages/Messages';
import MessageInput from '../../components/MessageInput/MessageInput';

class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            username: "",
            showChat: false
        };

        this.onStart = this.onStart.bind(this);
    }

    onStart() {
        this.props.dispatch(enterChat({username: this.state.username}));
    }

    render() {

        const {inChat, messages} = this.props;

        return !inChat ? (
                <div className={styles.welcomeWrapper}>
                    <Welcome onUsernameChange={(username) => this.setState({username})}
                             onStartClick={this.onStart}
                             startDisabled={!this.state.username}
                    />
                </div>) :
            <div className={styles.chatWrapper}>
                <Messages items={messages}/>
                <MessageInput/>
            </div>;
    }
}

App.propTypes = {
    inChat: PropTypes.bool
};

export function mapStateToProps(state) {
    const chatState = state.chat;

    return {
        // inChat: chatState.get("inChat")
        inChat: true,
        messages: chatState.get("messages")
    };
}

export default connect(mapStateToProps)(App);
