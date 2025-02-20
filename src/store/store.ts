// Store setup (store.ts)
import { combineReducers, createStore } from "redux";
import { authModalReducer } from "./reducers/AuthModalReducer";
import drawerReducer from "./reducers/DrawerReducer";

// Combine reducers
const rootReducer = combineReducers({ authModal: authModalReducer, Drawer: drawerReducer });

// Create the store
const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
