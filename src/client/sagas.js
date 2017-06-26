import {ACTION_ENTER_CHAT, URL_SOCKET, ACTION_SEND_CHAT_MESSAGE} from "./constants";
import {fork, take, put} from 'redux-saga/effects';
import {store} from './index';
import io from 'socket.io-client';
import {onChatEnterSuccess, onNewChatMessage} from "./actions";

function* socketSend(socket) {
    //noinspection InfiniteLoopJS
    while (true) {
        const {payload} = yield take(ACTION_SEND_CHAT_MESSAGE);
        socket.emit('CHAT_MESSAGE', JSON.stringify({content: payload.message, username: payload.username}));
        yield put(onNewChatMessage({content: payload.message, title: payload.username, incoming: false}));
    }
}

function* watcher() {
    //noinspection InfiniteLoopJS
    while (true) {
        let {payload} = yield take(ACTION_ENTER_CHAT);
        const socket = io(URL_SOCKET);
        socket.on('INCOMING_MESSAGE', function (msg) {
            console.log("INCOMING_MESSAGE", msg);
            try {
                const {content, username} = JSON.parse(msg);
                store.dispatch(onNewChatMessage({content, title: username, incoming: true}));
            }
            catch (e) {
                console.error(e);
            }
        });
        socket.emit('ENTER_CHAT', JSON.stringify({username: payload.username}));
        yield put(onChatEnterSuccess());
        yield fork(socketSend, socket);

    }
}

export default watcher;