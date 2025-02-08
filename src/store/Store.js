import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import statusTaskReducers from './reducers/statusTaskReducers';
import statusItemReducers from './reducers/statusItemReducers';
import statusUserReducers from './reducers/statusUserReducers';
import itemReducers from './reducers/itemReducers';
import taskReducers from './reducers/taskReducers';
import roleReducers from './reducers/roleReducers';
import loginReducers from './reducers/loginReducers';

const rootReducer = combineReducers({
    statusTask: statusTaskReducers,
    statusItem: statusItemReducers,
    statusUser: statusUserReducers,
    item: itemReducers,
    task: taskReducers,
    role: roleReducers,
    login: loginReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}