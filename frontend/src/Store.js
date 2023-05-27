
import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import { Dealreducer } from './Redux/Dealers.redux/Dealers.reducer';


const rootReducer = combineReducers({
    dealManager: Dealreducer
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))