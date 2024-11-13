import { createStore } from 'redux';
import RootReducer from '../Redux/RootReducer';

const store = createStore(RootReducer);

// store.subscribe(() => console.log(store.getState()))

export default store;


