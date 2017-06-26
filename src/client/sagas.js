import {ACTION_SOCKET_CONNECT, ACTION_SOCKET_DISCONNECT, ACTION_SOCKET_SEND, URL_SOCKET} from "./constants";
import {call, fork, take, cancel, put} from 'redux-saga/effects';
import {socket} from './index';
import io from 'socket.io-client';

function* socketSend(socket) {
//noinspection InfiniteLoopJS
    while (true) {
        const {payload} = yield take(ACTION_SOCKET_SEND);
        socket.emit('ENTER_CHAT', {message: payload.message, username: payload.username});
    }
}

function* watcher() {
    //noinspection InfiniteLoopJS
    while (true) {
        let {payload} = yield take(ACTION_SOCKET_CONNECT);
        const socket = io(URL_SOCKET);
        socket.emit('ENTER_CHAT', {username: payload.username});

        yield fork(socketSend);
    }
}

export default watcher;