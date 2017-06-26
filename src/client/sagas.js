import {ACTION_ENTER_CHAT, URL_SOCKET, ACTION_SEND_CHAT_MESSAGE} from "./constants";
import {call, fork, take, cancel, put} from 'redux-saga/effects';
import {socket} from './index';
import io from 'socket.io-client';
import {onChatEnterSuccess} from "./actions";

function* socketSend(socket) {
    //noinspection InfiniteLoopJS
    while (true) {
        const {payload} = yield take(ACTION_SEND_CHAT_MESSAGE);
        socket.emit('CHAT_MESSAGE', {message: payload.message, username: payload.username});
    }
}

function* watcher() {
    //noinspection InfiniteLoopJS
    while (true) {
        let {payload} = yield take(ACTION_ENTER_CHAT);
        const socket = io(URL_SOCKET);
        socket.emit('ENTER_CHAT', JSON.stringify({username: payload.username}));
        yield put(onChatEnterSuccess());

        yield fork(socketSend);
    }
}

export default watcher;