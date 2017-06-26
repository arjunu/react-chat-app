import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import sagas from './sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(
        createReducer(), initialState, enhancer
    );

    sagaMiddleware.run(sagas);

    return store;
}
