import {fromJS} from 'immutable';

export const createReducerFromObject = (reducerFunctions, initialState) => {
    if(!reducerFunctions.default)
        reducerFunctions.default = state => state;

    return (state, {type, payload}) => (reducerFunctions[type] || reducerFunctions["default"])(state || initialState, payload);
};

const initialState = fromJS({
});

const reducerFunctions = {
};

const chatReducer = createReducerFromObject(reducerFunctions, initialState);

export default chatReducer;