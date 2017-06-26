import {fromJS} from 'immutable';
import {ACTION_ENTER_CHAT_SUCCESS} from "../constants";

export const createReducerFromObject = (reducerFunctions, initialState) => {
    if (!reducerFunctions.default)
        reducerFunctions.default = state => state;

    return (state, {type, payload}) => (reducerFunctions[type] || reducerFunctions["default"])(state || initialState, payload);
};

const initialState = fromJS({
    inChat: false,
    messages: [
        {content: "Hello", title: "Arjun U", incoming: true}
    ]
});

const reducerFunctions = {
    [ACTION_ENTER_CHAT_SUCCESS]: (state) => state.set("inChat", true)
};

const chatReducer = createReducerFromObject(reducerFunctions, initialState);

export default chatReducer;