import { createStore } from 'redux';
import RootReducer from './RootReducer';

const store = createStore(RootReducer);

// store.subscribe(() => console.log(store.getState()))

export default store;


