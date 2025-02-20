// Store setup (store.ts)
import { combineReducers, createStore } from "redux";
import { authModalReducer } from "./reducers/AuthModalReducer";

// Combine reducers
const rootReducer = combineReducers({ authModal: authModalReducer });

// Create the store
const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;