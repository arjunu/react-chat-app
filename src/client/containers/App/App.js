import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as styles from './App.css';
import {enterChat} from "../../actions";
import Welcome from '../../components/Welcome/Welcome';
import Messages from '../../components/Messages/Messages';

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

        const {inChat} = this.props;

        return (
            <div className={styles.wrapper}>
                {!inChat && <Welcome onUsernameChange={(username) => this.setState({username})}
                                     onStartClick={this.onStart}
                                     startDisabled={!this.state.username}
                />}
            </div>
        );
    }
}

App.propTypes = {
    inChat: PropTypes.bool
};

export function mapStateToProps(state) {
    const chatState = state.chat;

    return {
        inChat: chatState.get("inChat")
    };
}

export default connect(mapStateToProps)(App);
