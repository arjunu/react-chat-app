import {ACTION_ENTER_CHAT, ACTION_ENTER_CHAT_SUCCESS} from './constants';

export const enterChat = payload => ({type: ACTION_ENTER_CHAT, payload});
export const onChatEnterSuccess = () => ({type: ACTION_ENTER_CHAT_SUCCESS});
