import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import statusTaskReducers from './reducers/statusTaskReducers';
import statusItemReducers from './reducers/statusItemReducers';
import itemReducers from './reducers/itemReducers';
import taskReducers from './reducers/taskReducers';
import loginReducers from './reducers/loginReducers';

const rootReducer = combineReducers({
    statusTask: statusTaskReducers,
    statusItem: statusItemReducers,
    item: itemReducers,
    task: taskReducers,
    login: loginReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}