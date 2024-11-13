import { DrawerState } from "./DrawerType";

const OPEN_DRAWER = "OPEN_DRAWER";
const CLOSE_DRAWER = "CLOSE_DRAWER";

const initialState = {
  isOpen: false,
};

export default function drawerReducer(state = initialState, action: any): DrawerState {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isOpen: true };
    case CLOSE_DRAWER:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
