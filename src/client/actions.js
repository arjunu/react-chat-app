import {ACTION_ENTER_CHAT, ACTION_ENTER_CHAT_SUCCESS, ACTION_SEND_CHAT_MESSAGE, ACTION_RECEIVED_CHAT_MESSAGE} from './constants';

export const enterChat = payload => ({type: ACTION_ENTER_CHAT, payload});
export const onChatEnterSuccess = () => ({type: ACTION_ENTER_CHAT_SUCCESS});
export const sendChatMessage = (payload) => ({type: ACTION_SEND_CHAT_MESSAGE, payload});
export const onNewChatMessage = (payload) => ({type: ACTION_RECEIVED_CHAT_MESSAGE, payload});