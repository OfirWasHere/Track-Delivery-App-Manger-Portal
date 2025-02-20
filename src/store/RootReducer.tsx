import { combineReducers } from "redux";
import drawerReducer from "./reducers/DrawerReducer";

const RootReducer = combineReducers({drawer: drawerReducer});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer