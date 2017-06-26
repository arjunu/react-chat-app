import {combineReducers} from 'redux';
import chatReducer from './chat.reducer';

export default function createReducer(asyncReducers) {
    const appReducer = combineReducers({
        chat: chatReducer
    });

    return (state, action) => {
        return appReducer(state, action)
    };

}
