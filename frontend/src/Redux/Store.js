
import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import { Dealreducer } from './Dealers.redux/Dealers.reducer';

const rootReducer = combineReducers({
  dealManaget:Dealreducer
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))