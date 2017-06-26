import {fromJS} from 'immutable';
import {ACTION_ENTER_CHAT_SUCCESS, ACTION_RECEIVED_CHAT_MESSAGE} from "../constants";

export const createReducerFromObject = (reducerFunctions, initialState) => {
    if (!reducerFunctions.default)
        reducerFunctions.default = state => state;

    return (state, {type, payload}) => (reducerFunctions[type] || reducerFunctions["default"])(state || initialState, payload);
};

const initialState = fromJS({
    inChat: false,
    messages: []
});

const reducerFunctions = {
    [ACTION_ENTER_CHAT_SUCCESS]: (state) => state.set("inChat", true),
    [ACTION_RECEIVED_CHAT_MESSAGE]: (state, payload) => state.update("messages", messages => messages.push(fromJS(payload)))
};

const chatReducer = createReducerFromObject(reducerFunctions, initialState);

export default chatReducer;